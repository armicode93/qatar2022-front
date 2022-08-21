import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppSettings} from "../../settings/app.settings";
import {Partie} from "../../model/Partie";
import {Groupe} from "../../model/Groupe";

@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  constructor(private http: HttpClient) { }

  controller = 'Groupe/';


  findAll(): Observable<any>{
    return this.http.get(AppSettings.APP_URL + this.controller);
  }

  getOne(idGroupe: number): Observable<Groupe>
  {
    return this.http.get<Groupe>(AppSettings.APP_URL + this.controller + idGroupe);
  }

  AddOne(body: Groupe): Observable<Groupe>
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let options = { headers: headers };
    console.log(options)
    return this.http.post<Groupe>(AppSettings.APP_URL + this.controller,body ,options);
  }

  DeleteOne(idGroupe: number)
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let  options = { headers: headers };


    return this.http.delete(AppSettings.APP_URL + this.controller + idGroupe, options)
  }

}
