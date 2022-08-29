import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { AppSettings } from 'src/app/settings/app.settings';
import {Equipe} from "../../model/Equipe";

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private http: HttpClient) { }

  controller = 'Equipe/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
  options = { headers: this.headers };
  //<Observable> cioe cio che ci ritorna, il return

  findAll(): Observable<Equipe[]>
  {
    return this.http.get<Equipe[]>(AppSettings.APP_URL + this.controller);
  }
  getOne(idEquipe: number): Observable<Equipe>
  {
    return this.http.get<Equipe>(AppSettings.APP_URL + this.controller + idEquipe);
  }


  AddOne(body: Equipe): Observable<Equipe>
  {
    return this.http.post<Equipe>(AppSettings.APP_URL + this.controller,body,this.options);
  }
  DeleteOne(idEquipe:number)  {
    return this.http.delete<void>(AppSettings.APP_URL + this.controller + idEquipe,this.options);
  }


}
