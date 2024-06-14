// El DTO para crear un partido
export interface CreatePartidoDTO {
    torneoId: number;
    equipo1Id: number;
    equipo2Id: number;
    golesEquipo1: number;
    golesEquipo2: number;
    observacion: string;
    Estado?: string; // Este campo es opcional
  }
  
  // El DTO para actualizar un partido
  export interface UpdatePartidoDTO {
    torneoId?: number;
    equipo1Id?: number;
    equipo2Id?: number;
    golesEquipo1?: number;
    golesEquipo2?: number;
    observacion?: string;
    Estado?: string;
  }
  