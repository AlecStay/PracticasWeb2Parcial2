export interface CreateEquipoDTO {
    Descripcion: string;
    Serie: string;
    entornoId?: number;
  }
  
  export interface UpdateEquipoDTO {
    Descripcion?: string;
    Serie?: string;
    Estado?: string;
    entornoId?: number;
  }
  