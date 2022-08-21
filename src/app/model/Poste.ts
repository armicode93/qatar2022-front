import {Partie} from "./Partie";
import {Joueur} from "./Personnes/Joueur";

export class Poste
{
    nomPoste: string;

    tempsEntree: number;

    tempsSortie: number;

    joueur: Joueur;

    partie: Partie;
}