export default class RootModel {
    public constructor(obj: object){
    }
}

const fillProperty = (self, obj) => {
    for (let key in obj){
        if (obj.hasOwnProperty(key) && self.hasOwnProperty(key)){
            self[key] = obj[key];
        }
    }
}

export {
    fillProperty
}
