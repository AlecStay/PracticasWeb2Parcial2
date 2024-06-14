// El DTO para crear un torneo
export interface CreateTorneoDTO {
    Descripcion: string;
    Estado?: string; // Este campo es opcional
  }
  
  // El DTO para actualizar un torneo
  export interface UpdateTorneoDTO {
    Descripcion?: string;
    Estado?: string;
  }
  