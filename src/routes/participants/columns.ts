import type { ColumnDef } from '@tanstack/table-core';
import type { Participant } from '$lib/types/participant';

// Definimos las columnas basadas en el tipo Participant
export const columns: ColumnDef<Participant>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'location',
    header: 'Location',
  },
  {
    accessorKey: 'isActive',
    header: 'Status',
    cell: ({ row }) => (row.original.isActive ? 'Active' : 'Inactive'),
  },
];