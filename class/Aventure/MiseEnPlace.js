import Aventurier from "./Aventurier.js";
import Guerrier from './Guerrier.js';
import Voleur from './Voleur.js';
import Mage from './Mage.js';
import {cEO, cTN} from '../Utils.js';

let tabClasse = ['Aventurier', 'Guerrier', 'Voleur', 'Mage'];


export function randClasse(){
    let randClasse = Math.floor(Math.random()*(tabClasse.length));
    return tabClasse[randClasse];
}

export function createP(prenom, nom, classe){
    if('' !== nom && '' !== prenom){
        let personnage = null;
        switch(classe){
            case 'Guerrier':
                personnage = new Guerrier(nom, prenom);
            break;
            case 'Voleur':
                personnage = new Voleur(nom, prenom);
            break;
            case 'Mage':
                personnage = new Mage(nom, prenom);
            break;
            case 'Aventurier':
            default:
                personnage = new Aventurier(nom, prenom);
        }
        return personnage;
    }else{
        return false;
    }
}

export function fichePerso(perso){
    let element = cEO('table', {'class': ['table']});
    
    let thead= cEO('thead', {}, element);
    
    let trHead = cEO('tr', {'class': ['table-dark', 'toto']}, thead);
    let thNom = cEO('th', {}, trHead);
    cTN('Nom : ', thNom);
    let thPrenom = cEO('th', {}, trHead);
    cTN('Prénom : ', thPrenom);
    let thClasse = cEO('th', {colspan: 2}, trHead);
    cTN('Classe : ', thClasse);

    let tBody = cEO('tbody', {}, element);
    
    let trIdentite = cEO('tr', {}, tBody);
    let tdNom = cEO('td', {}, trIdentite);
    cTN(perso.nom, tdNom);
    let tdPrenom = cEO('td', {}, trIdentite);
    cTN(perso.prenom, tdPrenom);
    let tdClasse = cEO('td', {colspan: 2}, trIdentite);
    cTN(perso.constructor.name, tdClasse);
    
    let trSkills = cEO('tr', {}, tBody);
    let thLabelB = cEO('th', {}, trSkills);
    cTN('Bagarre', thLabelB);
    let tdValB = cEO('td', {}, trSkills);
    cTN(perso.bagarre, tdValB);
    let thLabelC = cEO('th', {}, trSkills);
    cTN('Cerveau', thLabelC);
    let tdValC = cEO('td', {}, trSkills);
    cTN(perso.cerveau, tdValC);
    
    let trPv = cEO('tr', {}, tBody);
    let thLabelPvB = cEO('th', {}, trPv);
    cTN('PV Base : ', thLabelPvB);
    let tdPvB = cEO('td', {}, trPv);
    cTN(perso.pvBase, tdPvB);
    let thLabelPvA = cEO('th', {}, trPv);
    cTN('PV actuel : ', thLabelPvA);
    let tdPvA = cEO('td', {}, trPv);
    cTN(perso.pvActuel, tdPvA);
    
    let trArme = cEO('tr', {}, tBody);
    let thArme = cEO('th', {colspan: 2}, trArme);
    cTN('Arme', thArme);
    let tdArme = cEO('td', {colspan: 2}, trArme);
    cTN(perso.arme.nom, tdArme);
    cTN(', ', tdArme);
    cTN(perso.arme.degats, tdArme);
    cTN(' dg base', tdArme);
    
    return element;
}

export function fichePersoConsole(personnage){
    let lePerso = `
${personnage.constructor.name}
----------------------------------------------------------
Personnage          :   ${personnage.prenom} ${personnage.nom}
Son arme            :  ${personnage.arme.nom} 
Dégats de base      :  ${personnage.arme.degats}
PV (Actuels / Base) : ${personnage.pvActuel}/${personnage.pvBase}`;

    return lePerso;
}