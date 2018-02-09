import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestBlogComponent } from './test-blog.component';
import {RouterModule, Routes} from "@angular/router";

const testRoutes: Routes = [
    {path:'test', component: TestBlogComponent}
]
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(testRoutes)
  ],
  declarations: [TestBlogComponent]
})
export class TestBlogModule { }
