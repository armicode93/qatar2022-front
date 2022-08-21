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
}
