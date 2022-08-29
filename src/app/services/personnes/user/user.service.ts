import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


import {AppSettings} from "../../../settings/app.settings";
import {User} from "../../../model/Personnes/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  controller = 'User/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
  options = { headers: this.headers };

  findAll(): Observable<any>
  {
    return this.http.get(AppSettings.APP_URL + this.controller);
  }

  getOne(cin: number): Observable<User>
  {
    return this.http.get<User>(AppSettings.APP_URL + this.controller + cin);

  }
  getCorrentUser(): Observable<User>
  
    {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
      let options = { headers: headers };

      return this.http.get<User>(AppSettings.APP_URL + this.controller+"user/",options);
    }

    AddOneAdmin(body: User): Observable<User> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let options = { headers: headers };

    return this.http.post<User>(AppSettings.APP_URL + this.controller+"addAdmin/", body,options);

  }

  UpdateOne(body: User): Observable<User>
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let options = { headers: headers };

    return this.http.put<User>(AppSettings.APP_URL + this.controller, body,options);


  }
  DeleteOne(cin: number) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let options = { headers: headers };

    return this.http.delete(AppSettings.APP_URL + this.controller + cin,options);
  }


}
