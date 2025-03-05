// src/lib/api.ts
import { API_BASE_URL, DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '$lib/constants';
import type { PaginatedParticipants, Participant, CreateParticipantDto, UpdateParticipantDto } from '$lib/types/participant';

export async function getParticipants(
  fetch: typeof globalThis.fetch = globalThis.fetch,
  page: number = DEFAULT_PAGE,
  pageSize: number = DEFAULT_PAGE_SIZE,
  filters: Record<string, any> = {}
): Promise<PaginatedParticipants> {
  const query = new URLSearchParams({
    page: page.toString(),
    pageSize: pageSize.toString(),
    filters: JSON.stringify(filters),
  }).toString();
  const response = await fetch(`${API_BASE_URL}/participants?${query}`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function getParticipant(id: number, fetch: typeof globalThis.fetch = globalThis.fetch): Promise<Participant> {
  const response = await fetch(`${API_BASE_URL}/participants/${id}`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function createParticipant(
  dto: CreateParticipantDto,
  fetch: typeof globalThis.fetch = globalThis.fetch
): Promise<Participant> {
  const response = await fetch(`${API_BASE_URL}/participants`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dto),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function updateParticipant(
  id: number,
  dto: UpdateParticipantDto,
  fetch: typeof globalThis.fetch = globalThis.fetch
): Promise<Participant> {
  const response = await fetch(`${API_BASE_URL}/participants/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dto),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function deactivateParticipant(id: number, fetch: typeof globalThis.fetch = globalThis.fetch): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/participants/${id}`, { method: 'DELETE' });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
}

export async function getParticipantsByDateRange(
  startDate: string,
  endDate: string,
  fetch: typeof globalThis.fetch = globalThis.fetch
): Promise<Participant[]> {
  const response = await fetch(`${API_BASE_URL}/participants/date-range/${startDate}/${endDate}`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function getParticipantCaregivers(id: number, fetch: typeof globalThis.fetch = globalThis.fetch): Promise<any[]> {
  const response = await fetch(`${API_BASE_URL}/participants/${id}/caregivers`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function assignCaregiver(
  participantId: number,
  caregiverId: number,
  fetch: typeof globalThis.fetch = globalThis.fetch
): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/participants/${participantId}/caregivers/${caregiverId}`, { method: 'POST' });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
}

export async function unassignCaregiver(
  participantId: number,
  caregiverId: number,
  fetch: typeof globalThis.fetch = globalThis.fetch
): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/participants/${participantId}/caregivers/${caregiverId}`, { method: 'DELETE' });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
}