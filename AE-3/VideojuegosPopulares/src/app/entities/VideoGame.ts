import { Title } from "@angular/platform-browser";

export class VideoGame {

    private _id : number = 0;
    private static countId : number = 1;

    constructor(public title : string, public company : string, public picture : string, public score : number){
        this._id = VideoGame.countId++; 
        this.title = title;
        this.company = company;
        this.picture = picture;
        this.score = score;
    }

    public getId () : number{
        return this._id;
    }

    public toString () : String {
        return `iD: ${this._id}, Title: ${this.title}, Company: ${this.company}, Picture: ${this.picture}, Score: ${this.score}`;
    }
}