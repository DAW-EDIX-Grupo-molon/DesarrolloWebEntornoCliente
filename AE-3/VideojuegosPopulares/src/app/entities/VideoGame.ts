import { Title } from "@angular/platform-browser";

export class VideoGame {

    constructor(public id: number, public title : string, public company : string, public picture : string, public score : number){
        this.id = id; 
        this.title = title;
        this.company = company;
        this.picture = picture;
        this.score = score;
    }
}
