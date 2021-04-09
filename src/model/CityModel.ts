import {default as RootModel, fillProperty} from "./RootModel";

/**
 * 城市模型
 * @memberOf module:model
 */
class CityModel extends RootModel{
    id: number = null;
    name: string = null;
    latin: string = null;

    constructor(obj: object){
        super(obj);
        
        fillProperty(this, obj);
    }

    public static create(obj): CityModel{
        let {
            city_en,
            city_name,
            id
        } = obj;
        return new CityModel({
            id: id,
            name: city_name,
            latin: city_en
        })
    }
}

export default CityModel;
