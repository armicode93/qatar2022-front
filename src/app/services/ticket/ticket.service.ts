import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Equipe} from "../../model/Equipe";
import {AppSettings} from "../../settings/app.settings";
import {Ticket} from "../../model/Ticket";
import {Partie} from "../../model/Partie";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  controller= 'Ticket/';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
  options = { headers: this.headers };

  findAll(): Observable<any>
  {
    return this.http.get<Ticket>(AppSettings.APP_URL + this.controller);
  }

  getOne(codeTicket: number): Observable<Ticket>
  {
    return this.http.get<Ticket>(AppSettings.APP_URL + this.controller + codeTicket);
  }

  AddOne(body: Ticket): Observable<Ticket>
  {
    return this.http.post<Ticket>(AppSettings.APP_URL + this.controller,body,this.options);
  }
  UpdateOne(body: Ticket): Observable<Ticket>
  {
    return this.http.put<Ticket>(AppSettings.APP_URL + this.controller,body, this.options);
  }

  DeleteOne(codeTicket: number)
  {
    return this.http.delete(AppSettings.APP_URL + this.controller + codeTicket, this.options);
  }
}
