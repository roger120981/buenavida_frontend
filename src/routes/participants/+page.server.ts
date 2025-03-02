import type { PageServerLoad } from './$types';
import { getParticipants } from '$lib/api/participants';

export const load: PageServerLoad = async ({ fetch }) => {
  // Hacer el fetch desde el backend usando la función getParticipants
  const paginatedData = await getParticipants(fetch, 1, 10);
  return {
    participants: paginatedData.data, // Solo pasamos los datos de la primera página
  };
};