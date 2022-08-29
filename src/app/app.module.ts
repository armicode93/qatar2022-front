import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { EquipeListeComponent } from './equipe-liste/equipe-liste.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {EquipeService} from "./services/equipe/equipe.service";
import { NavbarComponent } from './home/navbar/navbar.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import {FormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import { PartieListeComponent } from './partie-liste/partie-liste.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";



@NgModule({
  declarations: [ //liste de tout le composant pipes que appartien ace module
    AppComponent, EquipeListeComponent, NavbarComponent, CarouselComponent, FooterComponent, HomeComponent, PartieListeComponent
  ],
    imports: [ // tous les element que on a besoin de importer dans ce module
        BrowserModule,
        HttpClientModule,
        MatPaginatorModule,
        MatTableModule,
        MatDialogModule,
        MatSortModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        MatTableModule
    ],
  providers: [], // va permettre de utiliser le system de injection dependences
  bootstrap: [AppComponent] // permet a dire quelle est le preniere compoent a charger quand on demarre app
})
export class AppModule { }
