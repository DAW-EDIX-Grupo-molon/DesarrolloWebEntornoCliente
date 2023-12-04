export class Videojuego {
  
    public id: number = 0;
    public titulo: string = "";
    public _compania: string = "";
    public imagen: string = "";
    public valoracionMedia: number = 0;
  
    constructor(
      id: number = 0,
      titulo: string = "",
      _compania: string = "",
      imagen: string = "",
      valoracionMedia: number = 0
    ) {
      this.id = id;
      this.titulo = titulo;
      this._compania = this._compania;
      this.imagen = imagen;
      this.valoracionMedia = valoracionMedia;
    }
  
    public toString(): string {
      return `ID: ${this.id} | Título: ${this.titulo} | Compañía: ${this._compania} | URL imagen: ${this.imagen} | Valoración: ${this.valoracionMedia}`;
    }
  }
  