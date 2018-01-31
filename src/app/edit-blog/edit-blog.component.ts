import {Component, OnInit} from '@angular/core';
import {BlogItem, BlogModelService} from "../services/domain/blog-model.service";
import {MatChipInputEvent, MatSnackBar} from "@angular/material";
import {BlogRestfulService} from "../services/blog-restful.service";

@Component({
    selector: 'app-edit-blog',
    templateUrl: './edit-blog.component.html',
    styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {

    constructor(private repo: BlogRestfulService, private snakbar: MatSnackBar) {
    }

    blog: BlogItem = BlogModelService.newInst();

    ngOnInit() {
    }

    addTag(event: MatChipInputEvent) {
        const input = event.input;
        const value = event.value;

        if ((value || '').trim()) {
            this.blog.tags.push(value);
        }
        if (input) {
            input.value = '';
        }
    }

    removeTag(value: string) {
        const idx = this.blog.tags.indexOf(value);
        this.blog.tags.splice(idx, 1);
    }

    onSave() {
        this.repo.insert(this.blog).subscribe(a => {
            this.snakbar.open('Update Complete', '', {duration: 1000});
        }, error => {
            console.log("error", error.message);
            this.snakbar.open('ERROR: Insert failed', '', {duration: 1000});
        })
    }

    onCancel() {
        console.log('canceel');
        const aa: Domain.Some = new Domain.Some();
    }
}
