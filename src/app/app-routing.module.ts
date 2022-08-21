import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EquipeListeComponent} from "./equipe-liste/equipe-liste.component";
import {NavbarComponent} from "./home/navbar/navbar.component";
import {AppComponent} from "./app.component";


const routes: Routes = [

    {path : "home", component: NavbarComponent},
    {path: "", component: AppComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes,
      {
        useHash: true,
        onSameUrlNavigation: 'reload'
      }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
