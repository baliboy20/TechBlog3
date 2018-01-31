import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MaterialsModule} from "../materials/materials.module";
import {Route, RouterModule} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BlogRestfulService} from "./services/blog-restful.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import * as marked from 'marked';




const routes:Route[] = [
    {path: 'edit', loadChildren: './edit-blog/edit-blog.module#EditBlogModule' },
    {path: 'find', loadChildren: './find-blog/find-blog.module#FindBlogModule' },
    {path: '', redirectTo: 'find', pathMatch: 'full'}
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
    ],
  providers: [BlogRestfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
