import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppSettings} from "../../../settings/app.settings";
import {Joueur} from "../../../model/Personnes/Joueur";

@Injectable({
  providedIn: 'root'
})
export class JoueurService {
  constructor(private http: HttpClient) {}

  controller = 'Joueur/';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
  options = { headers: this.headers };

  findAll(): Observable<any> {
    return this.http.get(AppSettings.APP_URL + this.controller);
  }

  findAllByIdEquipe(idEquipe: Number): Observable<any> {
    return this.http.get(AppSettings.APP_URL + this.controller +'equipe/'+idEquipe);
  }


  getOne(cin: number): Observable<Joueur> {
    return this.http.get<Joueur>(AppSettings.APP_URL + this.controller + cin);
  }

  AddOne(body: Joueur): Observable<Joueur> {
    return this.http.post<Joueur>(AppSettings.APP_URL + this.controller, body,this.options);
  }
  UpdateOne(body: Joueur) {
    return this.http.put<Joueur>(AppSettings.APP_URL + this.controller, body,this.options);
  }

  DeleteOne(cin: number) {
    return this.http.delete(AppSettings.APP_URL + this.controller + cin,this.options);
  }

}

