import {Component, OnInit, ViewChild} from '@angular/core';
import {PartieService} from "../services/partie/partie.service";

import {Partie} from "../model/Partie";
import {AppSettings} from "../settings/app.settings";
import {HttpErrorResponse} from "@angular/common/http";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-partie-liste',
  templateUrl: './partie-liste.component.html',
  styleUrls: ['./partie-liste.component.css']
})
export class PartieListeComponent implements OnInit {

  private partie: Partie [];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


displayedPhoto = AppSettings.APP_URL + 'Images/High/';
  displayedColumns = ['eq1','Status','eq2',"add"];

  constructor(private partieService:PartieService) { }

  ngOnInit(): void {
    this.getAllPartie();
  }


 getAllPartie(): void{

    this.partieService.findAll().subscribe(

        (response: Partie[]) =>{

          this.partie = response;
        },
        (error :HttpErrorResponse) =>
        {
          alert(error.message);
        },
        () =>
        {
          console.log(this.partie);
          this.partie.sort();
        }
    );
  }


}
