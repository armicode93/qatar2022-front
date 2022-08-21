import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AppSettings} from "../../../settings/app.settings";
import {Staff} from "../../../model/Personnes/Staff";

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) {}

  controller = 'Staff/';

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


  getOne(cin: number): Observable<Staff> {
    return this.http.get<Staff>(AppSettings.APP_URL + this.controller + cin);
  }

  AddOne(body: Staff): Observable<Staff> {
    return this.http.post<Staff>(AppSettings.APP_URL + this.controller, body,this.options);
  }
  UpdateOne(body: Staff): Observable<Staff> {
    return this.http.put<Staff>(AppSettings.APP_URL + this.controller, body,this.options);
  }

  DeleteOne(cin: number) {
    return this.http.delete(AppSettings.APP_URL + this.controller + cin,this.options);
  }}

