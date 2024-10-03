import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// cand auzim cuvantul injectare ne gandim ca tre sa ne ducem intre paranteze , sa ne gandim la parametrii constructorului
  private apiUrl: string = "https://api.codebyte-software.com:2323/api/users"

  constructor(private httpClient: HttpClient) {

  }

  login(payload: any) { // post e pentru a transmite date
    //put sau patch il fol doar cand vrem sa face update
    //get cand vrem sa citim date de pe server
    return this.httpClient.post(`${this.apiUrl}/login`, payload);
  }

  register(payload: any) { // post e pentru a transmite date
    //put sau patch il fol doar cand vrem sa face update
    //get cand vrem sa citim date de pe server
    return this.httpClient.post(`${this.apiUrl}/register`, payload);

  }
}
