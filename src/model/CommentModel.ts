import {default as RootModel, fillProperty} from "./RootModel";
import {JToolDate} from 'icemilk';

class CommentModel extends RootModel{
    approve: number = null;
    content: string = null;
    id: number = null;
    nick: string = null;
    score: string = null;
    time: number = null;
    // filmId: number = null;
    // source: string = null;
    // platfromId: number = null;
    // spoiler: number = null;
    // sureViewed: string = null;
    // oppose: number = null;

    constructor(obj: object){
        super(obj);
        fillProperty(this, obj);
        this.time = JToolDate.timeIntervalFromDateString(this.time as any);
    }

    public static create(obj): CommentModel{
        return new CommentModel(obj)
    }
}

export default CommentModel;
