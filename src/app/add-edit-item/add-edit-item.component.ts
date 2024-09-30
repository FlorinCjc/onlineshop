import { Component } from '@angular/core';
import { MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-add-edit-item',// il folosim ca sa apelam componenta de angular : <app-add-edit-item></app-add-edit-item>
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormField,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './add-edit-item.component.html',
  styleUrl: './add-edit-item.component.css'
})
export class AddEditItemComponent {
  // value='salut';
  title: string="";
  description: string="";
  price: number=0;
  imageUrl: string="";

  showValue(){
    // console.log(this.value);// this. trebuie obligatoriu sa faca referire la value
  console.log(this.title);
  console.log(this.description);
  console.log(this.price);
  console.log(this.imageUrl);
  }
}
