import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppSettings} from "../../settings/app.settings";
import {Goal} from "../../model/Goal";
import {Partie} from "../../model/Partie";

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private http: HttpClient) { }

  controller = "Gaal/";


  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
  options = { headers: this.headers };

  findAll(): Observable<any>
  {
    return this.http.get(AppSettings.APP_URL + this.controller);
  }

  getOne(idGoal: number): Observable<Goal>
  {
    return this.http.get<Goal>(AppSettings.APP_URL + this.controller + idGoal);
  }


  AddOne (body: Goal): Observable<Goal>
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });

    let options = { headers: headers };
    console.log(options)
    return this.http.post<Goal>(AppSettings.APP_URL + this.controller,body ,options);
  }

  UpdateOne(body: Goal): Observable<Goal>
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let  options = { headers: headers };

    return this.http.put<Goal>(AppSettings.APP_URL + this.controller,body, options);
  }

  DeleteOne(idGoal: number)
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let  options = { headers: headers };

    return this.http.delete(AppSettings.APP_URL + this.controller + idGoal, options)
  }
}
