export class Torneo {
    idtorneo: number;
    Nombre: string;
    FechaInicio: Date;
    FechaFin: Date;
    Estado: string;
  
    constructor({ idtorneo, Nombre, FechaInicio, FechaFin, Estado }: Torneo) {
      this.idtorneo = idtorneo;
      this.Nombre = Nombre;
      this.FechaInicio = FechaInicio;
      this.FechaFin = FechaFin;
      this.Estado = Estado;
    }
  }
  