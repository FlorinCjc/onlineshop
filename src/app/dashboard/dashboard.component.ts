import { Component } from '@angular/core';
import {AddEditItemComponent} from "../add-edit-item/add-edit-item.component";
import {ListItemsComponent} from "../list-items/list-items.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AddEditItemComponent,
    ListItemsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  itemDashboard : any; // am salvat obiectul in dashboard
  constructor() {
  }
  //metoda asta o apelam in html in dreptul event onEditItem

  // itemParam reprezinta Elementul primit cu ajutorul eventEmiter definit in list-Items-Component.ts
onReceiveItem(itemParam : any) {
  console.log("Dashboard component - onReceiveItem()");
  console.log(itemParam);
  this.itemDashboard = itemParam; // primim item param si il salvam cu this.item in this.item
}
}
