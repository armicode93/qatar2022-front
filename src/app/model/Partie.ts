import {Equipe} from "./Equipe";
import {Stade} from "./Stade";
import {Tour} from "./Tour";

export class Partie{
    idPartie: number;

    eq1: Equipe;

    eq2: Equipe;

   stade: Stade;

     tour: Tour;

    scoreEq1: number;

    scoreEq2: number;

    dateTime: number;

    arbitre_principal: string;

    totalTime: number;

    prolongation: string;

    prix: number;



}