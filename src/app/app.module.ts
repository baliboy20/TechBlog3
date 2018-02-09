import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MaterialsModule} from "../materials/materials.module";
import {Route, RouterModule} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BlogRestfulService} from "./services/blog-restful.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import * as marked from 'marked';
import {SharedModule} from "./shared/shared.module";


const routes: Route[] = [
    // {path: 'edit', loadChildren: './edit-blog/edit-blog.module#EditBlogModule'},
    // {path: 'find', loadChildren: './find-blog/find-blog.module#FindBlogModule' },
    {path: 'blog', loadChildren: './blog/blog.module#BlogModule'},
    // {path: 'blog1', loadChildren: './test-blog/test-blog.module#TestBlogModule'},
    {path: '', redirectTo: 'edit', pathMatch: 'full'}
];


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        MaterialsModule,
        SharedModule,
    ],
    providers: [BlogRestfulService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
