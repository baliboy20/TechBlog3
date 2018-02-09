import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BlogItem} from "./domain/blog-model.service";

const url = 'http://localhost:8080';

@Injectable()
export class BlogRestfulService {

    constructor(private http: HttpClient) {
    }

    find() {
    }

    findAll() {
        return this.http.get(url.concat('/blogs'));
    }

    update(itm: BlogItem) {
    }

    remove(itm: BlogItem) {
    }

    insert(itm: BlogItem) {
        // remove item['_id']
        return this.http.post(url.concat('/blog'), itm);
    }
}
