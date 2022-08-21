import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppSettings} from "../../settings/app.settings";
import {Partie} from "../../model/Partie";
import {Tour} from "../../model/Tour";

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http: HttpClient) { }

  controller= 'Tour/';

  findAll(): Observable<any>{
    return this.http.get(AppSettings.APP_URL + this.controller);
  }

  getOne(idTour: number): Observable<Tour>
  {
    return this.http.get<Tour>(AppSettings.APP_URL + this.controller + idTour);
  }

  AddOne (body: Tour): Observable<Tour>
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let options = { headers: headers };
    console.log(options)
    return this.http.post<Tour>(AppSettings.APP_URL + this.controller,body ,options);

  }

  UpdateOne(body: Tour): Observable<Tour>
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let  options = { headers: headers };

    return this.http.put<Tour>(AppSettings.APP_URL + this.controller,body, options);

  }

  DeleteOne(idTour: number)
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let  options = { headers: headers };


    return this.http.delete(AppSettings.APP_URL + this.controller + idTour, options)
  }

}
