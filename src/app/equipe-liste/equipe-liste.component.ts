import {Component, OnInit, ViewChild} from '@angular/core';
import {Equipe} from "../model/Equipe";
import {EquipeService} from "../services/equipe/equipe.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AppSettings} from "../settings/app.settings";
import {Image} from "../model/Image";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTable} from "@angular/material/table";
import {EquipeListeDataSource, EquipeListeItem} from "./equipe-liste-datasource";
import {MatDialog} from "@angular/material/dialog";



@Component({
  selector: 'app-equipe-liste',
  templateUrl: './equipe-liste.component.html',
  styleUrls: ['./equipe-list.component.css']
})
export class EquipeListeComponent implements OnInit { // abbiamo la necessita di call questa funzione qui sotto che ho creato ogni volta che chiamera questo component, e allora OnInit
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    @ViewChild(MatTable, {static: true}) table: MatTable<EquipeListeItem>;

    public equipe: Equipe[];

    dataSource : EquipeListeDataSource;

    displayedPhoto = AppSettings.APP_URL + 'Images/High/';

    displayedColumns = ['pays', 'drapeau'];


    constructor(private equipeService: EquipeService, public dialog: MatDialog) {}
    ngOnInit() {

        this.equipeService.findAll().subscribe(equipe => {
                this.dataSource = new EquipeListeDataSource(equipe);
            },
            err => {
                console.log(err);
            },
            () => {
                console.log(this.dataSource);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
                this.table.dataSource = this.dataSource;
            }
        );
    }




  /*constructor(private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.getAllEquipes();
    this.refreshEquipes();
  }

public getAllEquipes(): void{
    //to be notified when some data comes back from the server(subscribe)
    this.equipeService.findAll().subscribe(
    // gli diciamo che se abbiamo una response di ritorno, sara di tipo Equipe, rxjs fel subscrribe
    (response: Equipe[]) => {
      // diciamo che la risposta sara una lista di equipe, cioe la variabile che abbiamo definito sopra sara il body della request di risposta,risposta viene dal  Observable
      this.equipe = response;
    },
    (error:HttpErrorResponse) =>
    {
      alert(error.message);
    }
    );
  }


    refreshEquipes() {
        this.equipe= this.equipe
            .map((equipe, i) => ({id: i + 1, ...equipe}))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }


   */



}
