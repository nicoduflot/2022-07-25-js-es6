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