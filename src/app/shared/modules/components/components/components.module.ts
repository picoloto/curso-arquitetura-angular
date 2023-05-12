import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BreadcrumbComponent } from "src/app/shared/components/breadcrumb/breadcrumb.component";
import { AngularMaterialModule } from "../../angular-material/angular-material.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule],
  exports: [BreadcrumbComponent, AngularMaterialModule],
})
export class ComponentsModule {}
