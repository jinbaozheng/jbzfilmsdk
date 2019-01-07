import {fillProperty, default as RootModel} from "./RootModel";

class FilmSimpleModel extends RootModel{
    id:string = null;
    dimensional:string = null;
    grade:string = null;
    name:string = null;
    show:boolean = false;
    smallImg:string = null;

    // bdId:string = null;
    // mtimeId:string = null
    // myId:string = null
    // tbId:string = null
    // wpId:string = null

    public constructor(obj: object){
        super(obj);
        fillProperty(this, obj);
    }

    public static create(obj): FilmSimpleModel{
        return new FilmSimpleModel(obj)
    }

}

export default FilmSimpleModel;
