import RootModel, {fillProperty} from "./RootModel";

export default class FilmModel extends RootModel{
    actors: string = null;
    area: string = null;
    bigImg: string = null;
    category: string = null;
    description: string = null;
    dimensional: string = null;
    director: string = null;
    duration: string = null;
    grade: string = null;
    hotOrWait: number = null;
    id: string = null;
    info: string = null;
    language: string = null;
    name: string = null;
    photos: string[] = null;
    show: boolean = null;
    showDate: string = null;
    smallImg: string = null;

    public constructor(obj: object){
        super(obj);
        fillProperty(this, obj);
    }

    public static create(obj): FilmModel{
        return new FilmModel(obj)
    }
}