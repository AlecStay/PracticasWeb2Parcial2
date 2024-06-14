export class Partido {
    idpartido: number;
    equipoLocalId: number;
    equipoVisitanteId: number;
    Fecha: Date;
    Estado: string;
    torneoId: number;
  
    constructor({ idpartido, equipoLocalId, equipoVisitanteId, Fecha, Estado, torneoId }: Partido) {
      this.idpartido = idpartido;
      this.equipoLocalId = equipoLocalId;
      this.equipoVisitanteId = equipoVisitanteId;
      this.Fecha = Fecha;
      this.Estado = Estado;
      this.torneoId = torneoId;
    }
  }
  