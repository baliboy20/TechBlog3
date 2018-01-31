import {Injectable} from '@angular/core';

export interface BlogItem {
    content?: string,
    postedOn: Date,
    title: string,
    _id?: string,
    tags?: string[],
    categories?: string[],
}

@Injectable()
export class BlogModelService {

    constructor() {
    }

    // clone(content, postedOn, title, id, tags, categories) : BlogItem {
    //     const bi: BlogItem= {} as BlogItem;
    //      bi.content = content|| '';
    //      bi.postedOn = postedOn|| null;
    //      bi.title = title|| '';
    //      bi.id = id || '';
    //      bi.tags = tags || [];
    //      bi.categories = categories || [];
    //     return bi;
    // }

    static newInst() : BlogItem {
        const bi: BlogItem= {} as BlogItem;
        bi.content =   '### Hello dolly';
        bi.postedOn = null;
        bi.title = '';
        bi._id =  '';
        bi.tags = ['tag1', 'tag2', 'tag3'];
        bi.categories = ['a','b','c'];
        return bi;
    }


   static clone( _: BlogItem) : BlogItem {
        const bi: BlogItem= {} as BlogItem;
        bi.content = _.content;
        bi.postedOn = _.postedOn ;
        bi.title = _.title ;
        bi._id = _._id  ;
        bi.tags = _.tags  ;
        bi.categories = _.categories  ;
        return bi;
    }

}
