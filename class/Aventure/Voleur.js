import Arme from "./Arme.js";
import Aventurier from "./Aventurier.js";
export default class Voleur extends Aventurier{
    constructor(nom, prenom){
        super(nom, prenom);
        this.bagarre = 3;
        this.cerveau = 3;
        this.arme = new Arme('Dague', 8);
        this.dgSupBackstab = 1;
    }

    sneakAttack(cible){
        let dgSup = 0;
        for(let i = 0; i < this.dgSupBackstab; i++){
            dgSup += Math.floor(Math.random()*6+1);
        }
        let degats = this.arme.degats + dgSup;
        console.log(`${this.prenom} occasionne ${this.arme.degats} dégats de base plus ${dgSup} pour ${degats} dégat(s) au total`);
        this.modifierPV(cible, degats, '-');
    }

    //changer le multi par doubler les dégâts
    multi(cible){
        console.log(`${this.prenom} attaque en traître`);
        this.sneakAttack(cible);
        console.log(`${cible.prenom} à ${cible.pvActuel} / ${cible.pvBase}`);
    }
}