import Arme from "./Arme.js";
import Aventurier from "./Aventurier.js";
export default class Mage extends Aventurier{
    constructor(nom, prenom){
        super(nom, prenom);
        this.bagarre = 2;
        this.cerveau = 4;
        this.arme = new Arme('Bâton', 8);
        this.sacADos.ajoutElement(this.arme);
        this.pvBase = 40;
        this.pvActuel = this.pvBase;
        this.nbDBouleDeFeu = 2;
    }

    bouleDeFeu(cible){
        let dgSup = 0;
        for(let i = 0; i < this.nbDBouleDeFeu; i++){
            dgSup += Math.floor(Math.random()*6+1);
        }
        let degats = this.arme.degats + dgSup;
        console.log(`${this.prenom} occasionne ${this.arme.degats} dégats de base plus ${dgSup} pour ${degats} dégat(s) au total sur ${cible.prenom}`);
        cible.modifierPV(-degats);
    }

    //changer le multi par doubler les dégâts
    multi(cible){
        if (this.pointsAventure > 0){
            console.log(`${this.prenom} Lance une boule de feu sur ${cible.prenom}`);
            this.bouleDeFeu(cible);
            console.log(`multi sur ${cible.prenom} à ${cible.pvActuel} / ${cible.pvBase}`);
            this.pointsAventure = this.pointsAventure - 1;
        }else{
            console.log(`${this.prenom} n'a plus assez de point d'aventure pour lancer sa boule de feu`);
            this.corpsACorps(cible);
        }
        cible.checkHealth();
    }

    changerNiveau(){
        this.niveauActuel = this.niveauActuel + 1;
        this.pvBase = this.pvBase * 1.1;
        this.nbDBouleDeFeu = this.nbDBouleDeFeu + 1;
        console.log(`${this.prenom} passe au niveau ${this.niveauActuel}`);
    }
}