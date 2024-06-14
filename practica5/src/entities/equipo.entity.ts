export class Equipo {
  idequipo: number;
  Descripcion: string;
  Serie: string;
  Estado: string;
  entornoId: number;

  constructor({ idequipo, Descripcion, Serie, Estado, entornoId }: Equipo) {
      this.idequipo = idequipo;
      this.Descripcion = Descripcion;
      this.Serie = Serie;
      this.Estado = Estado;
      this.entornoId = entornoId;
  }
}
