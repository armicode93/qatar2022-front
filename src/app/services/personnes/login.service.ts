import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Token} from "../../model/Personnes/Token";
import {AppSettings} from "../../settings/app.settings";

export class loginRequest {
  username: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  controller = 'login';

  sendCredential(username : string, password : string) : Observable <Token>{
    let url = AppSettings.Login_URL+this.controller;

    /*		let encodedCredentials = btoa(username+ ":" + password);
            let basicHeader = "Basic " + encodedCredentials;
            let headers = new HttpHeaders({
                "Content-Type" : 'application/x-www-form-urlencoded',
                "Authorization" : basicHeader
            });
            console.log(headers);
    */
    let body = new loginRequest();
    body.password=password;
    body.username=username;

    return this.http.post<Token>(url, body);
  }

  checkSession(){

    if(localStorage.getItem('xAuthToken')!=null || localStorage.getItem('xAuthToken') !=undefined){
      return true
    }

    return false;
  }

  logout(){
    localStorage.clear();
    location.reload();

  }



}

