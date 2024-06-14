export class Entorno {
    identorno: number;
    Nombre: string;
    Estado: string;
  
    constructor({ identorno, Nombre, Estado }: Entorno) {
      this.identorno = identorno;
      this.Nombre = Nombre;
      this.Estado = Estado;
    }
  }
  