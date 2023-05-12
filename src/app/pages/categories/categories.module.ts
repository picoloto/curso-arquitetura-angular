import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CategoriesRoutingModule } from "./categories-routing.module";
import { CategoryListComponent } from "./category-list/category-list.component";
import { CategoryFormComponent } from "./category-form/category-form.component";
import { AngularMaterialModule } from "src/app/shared/modules/angular-material/angular-material.module";
import { ComponentsModule } from "src/app/shared/modules/components/components/components.module";

@NgModule({
  declarations: [CategoryListComponent, CategoryFormComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    AngularMaterialModule,
    ComponentsModule,
  ],
})
export class CategoriesModule {}
