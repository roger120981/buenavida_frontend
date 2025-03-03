export interface Agency {
    id: number;
    name: string;
    createdAt: string; // Fecha en formato ISO
    updatedAt: string; // Fecha en formato ISO
  }
  
  export interface PaginatedAgencies {
    data: Agency[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
    hasNext: boolean;
  }