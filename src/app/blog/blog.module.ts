import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogComponent} from "./blog.component";
import {RouterModule, Routes} from "@angular/router";
import {MaterialsModule} from "../../materials/materials.module";
import {EditBlogComponent} from "./edit-blog/edit-blog.component";
import {FindBlogComponent} from "./find-blog/find-blog.component";
import {EditBlogModule} from "./edit-blog/edit-blog.module";
import {FindBlogModule} from "./find-blog/find-blog.module";



const blogRoutes: Routes = [
    {
        path: '', component: BlogComponent
        , children: [
            {path: 'blog-find',  component: FindBlogComponent},
            {path: 'blog-edit', component: EditBlogComponent},
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(blogRoutes),
        MaterialsModule,
        EditBlogModule,
        FindBlogModule,
    ],
    declarations: [BlogComponent],
    exports: [BlogComponent]
})
export class BlogModule {
}
