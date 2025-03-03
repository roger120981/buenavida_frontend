import { API_BASE_URL, DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '$lib/constants';
import type { Agency, PaginatedAgencies } from '$lib/types/agency';

export async function getAgencies(
  fetch: typeof globalThis.fetch = globalThis.fetch,
  page: number = DEFAULT_PAGE,
  pageSize: number = DEFAULT_PAGE_SIZE,
  filters: Record<string, any> = {}
): Promise<PaginatedAgencies> {
  const query = new URLSearchParams({
    page: page.toString(),
    pageSize: pageSize.toString(),
    filters: JSON.stringify(filters),
  }).toString();
  const response = await fetch(`${API_BASE_URL}/agencies?${query}`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function getAgency(
  id: number,
  fetch: typeof globalThis.fetch = globalThis.fetch
): Promise<Agency> {
  const response = await fetch(`${API_BASE_URL}/agencies/${id}`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function deactivateAgency(
  id: number,
  fetch: typeof globalThis.fetch = globalThis.fetch
): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/agencies/${id}`, { method: 'DELETE' });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
}