
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppSettings} from "../../settings/app.settings";
import {Partie} from "../../model/Partie";
import {Type} from "../../model/Type";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) { }

  controller = 'Type/';

  findAll(): Observable<any>{
    return this.http.get(AppSettings.APP_URL + this.controller);
  }

  getOne(idType: number): Observable<Type>
  {
    return this.http.get<Type>(AppSettings.APP_URL + this.controller + idType);
  }

  AddOne (body: Type): Observable<Type>
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let options = { headers: headers };
    console.log(options)

    return this.http.post<Type>(AppSettings.APP_URL + this.controller,body ,options);

  }
  DeleteOne(idType: number)
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " +localStorage.getItem('xAuthToken') });
    let  options = { headers: headers };


    return this.http.delete(AppSettings.APP_URL + this.controller + idType, options)
  }
}
