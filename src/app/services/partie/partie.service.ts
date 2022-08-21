import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppSettings} from "../../settings/app.settings";
import {Partie} from "../../model/Partie";

@Injectable({
  providedIn: 'root'
})
export class PartieService {

  constructor(private http: HttpClient) {}
    
    controller = 'Partie/';
  
  findAll(): Observable<any>{
  return this.http.get(AppSettings.APP_URL + this.controller);
  }

  getOne(idPartie: number): Observable<Partie>
  {
     return this.http.get<Partie>(AppSettings.APP_URL + this.controller + idPartie);
  }
  AddOne (body: Partie): Observable<Partie>
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let options = { headers: headers };
    console.log(options)
    return this.http.post<Partie>(AppSettings.APP_URL + this.controller,body ,options);

  }

  UpdateOne(body: Partie): Observable<Partie>
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let  options = { headers: headers };

    return this.http.put<Partie>(AppSettings.APP_URL + this.controller,body, options);

  }

  DeleteOne(idPartie: number)
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let  options = { headers: headers };


    return this.http.delete(AppSettings.APP_URL + this.controller + idPartie, options)
  }
  
}
