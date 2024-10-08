import {Component, EventEmitter, Output} from '@angular/core';
import {ItemService} from "../item.service";
import {NgForOf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-list-items', // modul in care apelam componenta
  standalone: true,
  imports: [
    NgForOf,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {
  itemsList: Array<any> = [];
  //EventEmitter ne ajuta sa trimitem obiecte / evenimente in exteriorul componentei curente
  // de aici avem si @Output pentru ca merge spre exterior
  // pentru a emite un eveniment folosim metoda emit()
  @Output() onEditEvent: EventEmitter<any>= new EventEmitter<any>();
  constructor(private itemService : ItemService) {
    // this.itemsList.push("item 1");
    // this.itemsList.push("item 2");
    // this.itemsList.push("item 3");
    // this.itemsList.push("item 4");
    // this.itemsList.push("item 5");
    //
    // console.log(this.itemsList);

    //fix temporar - nerecomandat
    //   setTimeout(() => {this.itemsList = this.itemService.getItemsList();
    //     console.log(this.itemsList);}, 2000); 2 sec
    //
    // }

    // Folosind subscribe ne abonam sa primim toate modificarile listei atunci cand vin de la server
    this.itemService.getItemsList().subscribe((items:Array<any>)=> {
      console.log("Eu sunt abonatul,am primit noua lista de items")
      this.itemsList = items;
    })
  }
  onDeleteItem(id : string){
    // alert("Attention!" + id);
    this.itemService.deleteItem(id);
  }
  onEditItem(item : any){
    console.log("List items - onEditItem()");
  this.onEditEvent.emit(item);
  }
  //metoda emit() trimite in componenta de dashboard item-ul pe care am dat click

}
