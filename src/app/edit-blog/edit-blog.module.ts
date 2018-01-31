import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBlogComponent } from './edit-blog.component';
import {Route, RouterModule} from "@angular/router";
import {MaterialsModule} from "../../materials/materials.module";
import {FormsModule} from "@angular/forms";
import {MarkdownModule} from "angular2-markdown";

const editBlogRoute: Route[] = [
    {path:'', component: EditBlogComponent}
]
@NgModule({
  imports: [
    CommonModule,
      RouterModule.forChild(editBlogRoute),
      MaterialsModule,
      FormsModule,
      MarkdownModule.forRoot(),
  ],
  declarations: [EditBlogComponent]
})
export class EditBlogModule { }
