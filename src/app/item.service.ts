import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
private apiUrl: string = "https://api.codebyte-software.com:2323/api/items"; // variabila global declarata
  private itemsList: Array<any>=[];
  private itemSubject = new BehaviorSubject<Array<any>>([]);
  constructor(private httpClient: HttpClient) {
  this.readItems();
  }
  // displayInfo(): void{
  //   console.log("This is a message");
  // }

  createItem(item : any){
    let body = {
      title: item.title,
      description: item.description,
      price: item.price,
      imageUrl: item.imageUrl
    };
  this.httpClient.post(this.apiUrl,body).subscribe((response:any) =>{ //aici am facut in mom in care cineva ne da subscripe sa primim notificare ,
    //raspunsul de la server poate sa vina instant , sau mai lent
    // orice request facut catre srv are si un raspuns
    console.log(response);
    this.readItems();
  })
  }
  readItems(){
    //la metodele de read nu ne trebuie parametrii doar in cazul asta
    this.httpClient.get(this.apiUrl).subscribe((response:any) =>{
      console.log(response);
      console.log(response.data);
  // this.itemsList  = response.data;
      // metoda next() anunta toti abonatii (cei care au dat subscribe) ca au aparut modificari pentru lista aceasta
      this.itemSubject.next(response.data);
    })
  }
  //this.apiUrl + "/" + id -- concatenare ca in Java
  deleteItem(id: string){
    this.httpClient.delete(`${this.apiUrl}/${id}`).subscribe((response:any) =>{ // concatenare de stringuri pe care o face Angular
      console.log(response);
      this.readItems();
    })
  }
  // asta era inainte de modificare
  //getItemsList(){
  //     return this.itemsList;

  getItemsList(){
    return this.itemSubject.asObservable(); // ne va permite sa dam subscribe si sa fim la curent cu toate modificarile
  }


  updateItem(item : any){
    let body = { // aici facem update si i am dat id: item.id , fata de metoda create
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price,
      imageUrl: item.imageUrl
    };
    console.log(body);
    this.httpClient.put(this.apiUrl,body).subscribe((response : any) => {
      console.log(response);
      this.readItems();
    })
  }
}
