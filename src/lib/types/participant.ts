export interface Participant {
    id: number;
    name: string;
    isActive: boolean;
    gender: string;
    medicaidId: string;
    dob: string; // Fecha en formato ISO (ej. "1990-01-01T00:00:00.000Z")
    location: string;
    community: string;
    address: string;
    primaryPhone: string;
    secondaryPhone: string;
    locStartDate: string; // Fecha en formato ISO
    locEndDate: string;   // Fecha en formato ISO
    pocStartDate: string; // Fecha en formato ISO
    pocEndDate: string;   // Fecha en formato ISO
    units: number;
    hours: number;
    hdm: boolean;
    adhc: boolean;
    cmID: number;
    createdAt: string;    // Fecha en formato ISO
    updatedAt: string;    // Fecha en formato ISO
  }
  
  export interface PaginatedParticipants {
    data: Participant[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
    hasNext: boolean;
  }