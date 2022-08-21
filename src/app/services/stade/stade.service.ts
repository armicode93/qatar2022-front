import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Stade} from "../../model/Stade";
import {AppSettings} from "../../settings/app.settings";

@Injectable({
  providedIn: 'root'
})
export class StadeService {

  constructor(private http: HttpClient) { }

  controller = 'Stade/';



  findAll(): Observable<any> {
    return this.http.get(AppSettings.APP_URL + this.controller);
  }

  getOne(idStade: number): Observable<Stade> {
    return this.http.get<Stade>(AppSettings.APP_URL + this.controller + idStade);
  }

  AddOne(body: Stade): Observable<Stade> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let options = { headers: headers };
    console.log(options)
    return this.http.post<Stade>(AppSettings.APP_URL + this.controller, body,options);
  }

  DeleteOne(idStade: number) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let options = { headers: headers };

    return this.http.delete(AppSettings.APP_URL + this.controller + idStade,options);
  }
}

