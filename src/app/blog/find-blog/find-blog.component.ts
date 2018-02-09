import {Component, OnInit} from '@angular/core';
import {BlogRestfulService} from "../../services/blog-restful.service";
import {BlogItem} from "../../services/domain/blog-model.service";

@Component({
    selector: 'app-find-blog',
    templateUrl: './find-blog.component.html',
    styleUrls: ['./find-blog.component.scss']
})
export class FindBlogComponent implements OnInit {

    constructor(private restful: BlogRestfulService) {
    }

    blogs: BlogItem[];
    private addBlog = (a) => this.blogs = a;
    tableCols = ['title', 'postedOn', 'tags', 'categories'];

    ngOnInit() {
        this.restful.findAll().subscribe(this.addBlog);
    }

    keyup(e: KeyboardEvent) { console.log(e);}

}
