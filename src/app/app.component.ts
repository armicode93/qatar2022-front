import {Component, OnInit} from '@angular/core';
import {Equipe} from "./model/Equipe";
import {EquipeService} from "./services/equipe/equipe.service";
import {PartieService} from "./services/partie/partie.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
    
      
})
export class AppComponent implements OnInit{

  constructor(private equipeService: EquipeService, private  partieService: PartieService) {}


  ngOnInit() {

}

}
