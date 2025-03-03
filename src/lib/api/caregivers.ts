import { API_BASE_URL, DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '$lib/constants';
import type { Caregiver, PaginatedCaregivers } from '$lib/types/caregiver';

export async function getCaregivers(
  fetch: typeof globalThis.fetch = globalThis.fetch,
  page: number = DEFAULT_PAGE,
  pageSize: number = DEFAULT_PAGE_SIZE,
  filters: Record<string, any> = {}
): Promise<PaginatedCaregivers> {
  const query = new URLSearchParams({
    page: page.toString(),
    pageSize: pageSize.toString(),
    filters: JSON.stringify(filters),
  }).toString();
  const response = await fetch(`${API_BASE_URL}/caregivers?${query}`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function getCaregiver(
  id: number,
  fetch: typeof globalThis.fetch = globalThis.fetch
): Promise<Caregiver> {
  const response = await fetch(`${API_BASE_URL}/caregivers/${id}`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function deactivateCaregiver(
  id: number,
  fetch: typeof globalThis.fetch = globalThis.fetch
): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/caregivers/${id}`, { method: 'DELETE' });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
}