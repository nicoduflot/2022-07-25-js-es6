// c'est dans cette page de script que nous allons importer les fonctions ou la totalité des fonctions des fichier script js tiers

import * as other from './Others.js';
import loaded, {s, sAll} from './Utils.js';
import Toto, { Employee, Menuisier } from './Company.js';
import Company from './Company.js';

loaded(function(){
    console.log('Coucou module');
    other.foo();
    console.log(other.m);

    let company = new Toto('Agence tous risque');
    let duffer = new Company('Duffer paper');

    console.log(company);
    console.log(duffer);

    let employe = new Employee('Kurt', 'Océanologue');
    let carpenter = new Menuisier('John');

    console.log(employe);
    console.log('--------------------');
    console.log(carpenter, 'Menuisier');

    /*
    
    au clique sur le bouton id="addSpan" de la page, ajouter un span dans le paragraphe id="test"
    
    */

});