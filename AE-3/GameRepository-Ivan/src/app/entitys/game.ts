export class Game {

    //Atributos de la clase Game
    private _idGame: number = 0;
    private _titulo: string = "";
    private _companyia: string = "";
    private _imagen: string = "";
    private _valoracion: number = 0;

    //GETTER AND SETTER
    public get idGame(): number {
        return this._idGame;
    }
    public set idGame(value: number) {
        this._idGame = value;
    }

    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }

    public get companyia(): string {
        return this._companyia;
    }
    public set companyia(value: string) {
        this._companyia = value;
    }

    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }

    public get valoracion(): number {
        return this._valoracion;
    }
    public set valoracion(value: number) {
        this._valoracion = value;
    }

    constructor () {
    }

    //toString
    public toString():string {
        return `ID: ${this._idGame} | Título: ${this._titulo} | Compañía: ${this._companyia} | URL imagen: ${this._imagen} | Valoración: ${this._valoracion}`
    }

}
