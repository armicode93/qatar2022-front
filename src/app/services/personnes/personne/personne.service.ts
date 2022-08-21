import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppSettings} from "../../../settings/app.settings";
import {Personne} from "../../../model/Personnes/Personne";

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private http: HttpClient) {}

  controller = 'Personne/';

  findAll(): Observable<any> {
    return this.http.get(AppSettings.APP_URL + this.controller);
  }

  getOne(cin: number): Observable<Personne> {
    return this.http.get<Personne>(AppSettings.APP_URL + this.controller + cin);
  }
  getCurrentUser(): Observable<Personne> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let options = { headers: headers };

    return this.http.get<Personne>(AppSettings.APP_URL + this.controller+"user/",options);
  }

  AddOne(body: Personne): Observable<Personne> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let options = { headers: headers };

    return this.http.post<Personne>(AppSettings.APP_URL + this.controller+"Inscription", body);

  }
  AddOneAdmin(body: Personne): Observable<Personne> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let options = { headers: headers };

    return this.http.post<Personne>(AppSettings.APP_URL + this.controller+"addAdmin/", body,options);

  }
  UpdateOne(body: Personne): Observable<Personne> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let options = { headers: headers };

    return this.http.put<Personne>(AppSettings.APP_URL + this.controller, body,options);
  }
  DeleteOne(cin: number) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let options = { headers: headers };

    return this.http.delete(AppSettings.APP_URL + this.controller + cin,options);
  }

}

