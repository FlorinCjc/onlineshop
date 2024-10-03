import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    NgForOf,
    FormsModule,
    MatButton,
    MatCardActions,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatSuffix
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent { // ne am creat cele 4 proprietati urm pas e in html
username: string="";
email: string="";
password: string="";
confirmPassword: string="";


constructor(private authService : AuthService) {
  //am injectat authService
}

submitRegisterForm(){ //asa arata un JSON
  let payLoad = {
    username: this.username,
    email: this.username,
    password: this.password,
    confirmPassword: this.confirmPassword
  };
  //TODO:
  this.authService.register(payLoad).subscribe((response : any) =>{
    console.log(response);
  });

  //FIXME:
}

submitLoginForm(){
  let payLoad = { // ptr ca avem doar login avem nevoie de email si password atat
    email: this.username,
    password: this.password,
  };
  this.authService.login(payLoad).subscribe((response : any) =>{
    console.log(response);
  });
}
}
