import RootModel, {fillProperty} from "./RootModel";

class CinemaModel extends RootModel{
    address:string = null;
    comparedNames:string[] = null;
    distance:number = null;
    id:string = null;
    minPrice:number = null;
    name:string = null;

    constructor(obj: object){
        super(obj);
        fillProperty(this, obj);
    }

    public static create(obj): CinemaModel{
        return new CinemaModel(obj)
    }
}

export default CinemaModel;