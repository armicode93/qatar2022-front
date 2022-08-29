import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AppSettings} from "../../settings/app.settings";
import {HttpClient} from "@angular/common/http";
import {Image} from "../../model/Image";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  controller = 'Images/';

  constructor(private http: HttpClient) { }

  getOne(id : number): Observable<Image>
  {
    return this.http.get<Image>(AppSettings.APP_URL + this.controller + id)
  }

  AddOne(selectedFile: File): Observable<Image>
  {
    console.log(selectedFile);

    // FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', selectedFile, selectedFile.name);
    return this.http.post<Image>(AppSettings.APP_URL + this.controller , uploadImageData);

  }
}
