import Arme from "./Arme.js";
import Aventurier from "./Aventurier.js";
export default class Mage extends Aventurier{
    constructor(nom, prenom){
        super(nom, prenom);
        this.bagarre = 2;
        this.cerveau = 4;
        this.arme = new Arme('Bâton', 8);
        this.nbDBouleDeFeu = 2;
    }

    bouleDeFeu(cible){
        let dgSup = 0;
        for(let i = 0; i < this.nbDBouleDeFeu; i++){
            dgSup += Math.floor(Math.random()*6+1);
        }
        let degats = this.arme.degats + dgSup;
        console.log(`${this.prenom} occasionne ${this.arme.degats} dégats de base plus ${dgSup} pour ${degats} dégat(s) au total`);
        this.modifierPV(cible, degats, '-');
    }

    //changer le multi par doubler les dégâts
    multi(cible){
        console.log(`${this.prenom} Lance une boule de feu`);
        this.bouleDeFeu(cible);
        console.log(`${cible.prenom} à ${cible.pvActuel} / ${cible.pvBase}`);
    }
}