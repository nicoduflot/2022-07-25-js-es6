import Aventurier from "./Aventurier.js";
import Guerrier from './Guerrier.js';
import Voleur from './Voleur.js';
import Mage from './Mage.js';

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
    let html = '';
    html += `
<table class="table">
    <thead>
    <tr class="table-dark">
        <th>Nom : </th>
        <th>Prénom : </th>
        <th colspan="2">Classe : </th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>${perso.nom}</td>
        <td>${perso.prenom}</td>
        <td colspan="2">${perso.constructor.name}</td>
    </tr>
    <tr>
        <th>Bagarre</th>
        <td>${perso.bagarre}</td>
        <th>Cerveau</th>
        <td>${perso.cerveau}</td>
    </tr>
    <tr>
        <th>Pv base</th>
        <td>${perso.pvBase}</td>
        <th>Pv Actuel</th>
        <td>${perso.pvActuel}</td>
    </tr>
    <tr>
        <th colspan="2">Arme : </th>
        <td colspan="2">${perso.arme.nom}, ${perso.arme.degats} dégâts</td>
    </tr>
    </tbody>
</table>
    `;
    return html;
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