import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from "./search/search.component";
import {MaterialsModule} from "../../materials/materials.module";

@NgModule({
    imports: [
        CommonModule,
        // MaterialsModule,
    ],
    declarations: [
        SearchComponent,
    ],
    exports: [
        SearchComponent,
    ]
})
export class SharedModule {
}
