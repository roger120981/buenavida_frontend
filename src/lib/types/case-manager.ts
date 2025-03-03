export interface CaseManager {
    id: number;
    name: string;
    email: string;
    phone: string;
    createdAt: string; // Fecha en formato ISO (ej. "2025-03-01T12:00:00.000Z")
    updatedAt: string; // Fecha en formato ISO
  }
  
  export interface PaginatedCaseManagers {
    data: CaseManager[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
    hasNext: boolean;
  }