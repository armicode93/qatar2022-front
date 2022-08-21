import {symlink} from "fs";

import {Partie} from "./Partie";
import {Joueur} from "./Personnes/Joueur";
import {Type} from "./Type";

export class Goal
{
    idGoal: number;

    time: number;

    joueur : Joueur;

    partie: Partie;

    type: Type;
}