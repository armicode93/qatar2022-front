import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppSettings} from "../../settings/app.settings";
import {Reservation} from "../../model/Reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private  http:HttpClient) { }

  controller = 'Reservation/'
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
  options = { headers: this.headers };


  findAll(): Observable<any>
  {
      return this.http.get(AppSettings.APP_URL + this.controller,this.options);
  }

  getOne(codeReservation: number): Observable<Reservation>
  {
    return this.http.post<Reservation>(AppSettings.APP_URL + this.controller, codeReservation,this.options);
  }

  AddOne(body: Reservation): Observable<Reservation>
  {
      return this.http.post<Reservation>(AppSettings.APP_URL + this.controller, body,this.options);
  }

  DeleteOne(codeReservation: number)
  {
    return this.http.delete(AppSettings.APP_URL + this.controller + codeReservation,this.options);
  }
}

