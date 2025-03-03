import { API_BASE_URL, DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '$lib/constants';
import type { CaseManager, PaginatedCaseManagers } from '$lib/types/case-manager';

export async function getCaseManagers(
  fetch: typeof globalThis.fetch = globalThis.fetch,
  page: number = DEFAULT_PAGE,
  pageSize: number = DEFAULT_PAGE_SIZE,
  filters: Record<string, any> = {}
): Promise<PaginatedCaseManagers> {
  const query = new URLSearchParams({
    page: page.toString(),
    pageSize: pageSize.toString(),
    filters: JSON.stringify(filters),
  }).toString();
  const response = await fetch(`${API_BASE_URL}/case-managers?${query}`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function getCaseManager(
  id: number,
  fetch: typeof globalThis.fetch = globalThis.fetch
): Promise<CaseManager> {
  const response = await fetch(`${API_BASE_URL}/case-managers/${id}`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function deactivateCaseManager(
  id: number,
  fetch: typeof globalThis.fetch = globalThis.fetch
): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/case-managers/${id}`, { method: 'DELETE' });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
}