import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
private apiUrl: string = "https://api.codebyte-software.com:2323/api/items"; // variabila global declarata
  constructor(private httpClient: HttpClient) {

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
  })
  }
  readItems(){
    //la metodele de read nu ne trebuie parametrii doar in cazul asta
    this.httpClient.get(this.apiUrl).subscribe((response:any) =>{
      console.log(response);
    })
  }
  //this.apiUrl + "/" + id -- concatenare ca in Java
  deleteItem(id: string){
    this.httpClient.delete(`${this.apiUrl}/${id}`).subscribe((response:any) =>{ // concatenare de stringuri pe care o face Angular
      console.log(response);
    })
  }
}
