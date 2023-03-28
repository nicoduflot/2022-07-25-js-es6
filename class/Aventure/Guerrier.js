import Arme from "./Arme.js";
import Aventurier from "./Aventurier.js";
export default class Guerrier extends Aventurier{
    constructor(nom, prenom){
        super(nom, prenom);
        this.bagarre = 4;
        this.cerveau = 2;
        this.arme = new Arme('Épée', 10);
        this.pvBase = 70;
        this.pvActuel = this.pvBase;
        this.tauxMulti = 1.2;
    }

    //changer le multi par appliquer un taux de dégât supplémentaire
    multi(cible){
        console.log(`${this.prenom} lance attaque puissante sur ${cible.prenom}`);
        this.arme.degats = this.arme.degats*this.tauxMulti;
        this.taper(cible);
        this.arme.degats = this.arme.degats/this.tauxMulti;
        console.log(`multi sur ${cible.prenom} à ${cible.pvActuel} / ${cible.pvBase}`);
        this.checkHealth(cible);
    }

    changerNiveau(){
        this.niveauActuel = this.niveauActuel + 1;
        this.pvBase = this.pvBase * 1.1;
        this.tauxMulti = this.tauxMulti + 0.1;
        console.log(`${this.prenom} passe au niveau ${this.niveauActuel}`);
    }
}