import { Component, OnInit } from '@angular/core';
import {Equipe} from "../model/Equipe";
import {EquipeService} from "../services/equipe/equipe.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-equipe-liste',
  templateUrl: './equipe-liste.component.html',
  styleUrls: []
})
export class EquipeListeComponent implements OnInit { // abbiamo la necessita di call questa funzione qui sotto che ho creato ogni volta che chiamera questo component, e allora OnInit
  public equipe: Equipe[];

  constructor(private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.getAllEquipes();
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

}
