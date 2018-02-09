import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindBlogComponent } from './find-blog.component';
import {RouterModule, Routes} from "@angular/router";
import {MaterialsModule} from "../../../materials/materials.module";
import {FormsModule} from "@angular/forms";

// const findBlog: Routes = [
//     { path: '', component: FindBlogComponent }
//     ];
@NgModule({
  imports: [
    CommonModule,
      MaterialsModule,
      // RouterModule.forChild(findBlog),
      FormsModule,
  ],
  declarations: [FindBlogComponent]
})
export class FindBlogModule {  }
