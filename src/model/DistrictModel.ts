import {default as RootModel, fillProperty} from "./RootModel";

/**
 * 城市模型
 * @memberOf module:model
 */
class DistrictModel extends RootModel{
    id: number = null;
    name: string = null;

    constructor(obj: object){
        super(obj);
        fillProperty(this, obj);
    }

    public static create(obj): DistrictModel{
        let {
            tails,
            id
        } = obj;
        return new DistrictModel({
            id: id,
            name: tails.Name
        })
    }
}

export default DistrictModel;
