export interface Caregiver {
    id: number;
    name: string;
    email: string;
    phone: string;
    isActive: boolean;
    agencyId: number | null; // Relación opcional con una Agency
    createdAt: string; // Fecha en formato ISO
    updatedAt: string; // Fecha en formato ISO
  }
  
  export interface PaginatedCaregivers {
    data: Caregiver[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
    hasNext: boolean;
  }