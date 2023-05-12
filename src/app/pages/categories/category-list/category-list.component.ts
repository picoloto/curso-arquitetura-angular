import { Component } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Breadcrumb } from "src/app/shared/model/breadcrumb";

export interface PeriodicElement {
  name: string;
  type: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { type: "Lazer", name: "Cinema" },
  { type: "Lazer", name: "Shopping" },
];

@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.scss"],
})
export class CategoryListComponent {
  displayedColumns: string[] = ["category", "actions"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getBreadcrumbItems(): Breadcrumb[] {
    return [
      { routerLink: "/", description: "Home" },
      { routerLink: null, description: "Categorias" },
    ];
  }

  alert(element: PeriodicElement) {
    alert(`clicou no ${element.name}`);
  }
}
