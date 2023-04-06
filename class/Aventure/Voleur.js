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
        console.log(`${this.prenom} occasionne ${this.arme.degats} dégats de base plus ${dgSup} pour ${degats} dégat(s) au total sur sur ${cible.prenom}`);
        cible.modifierPV(-degats);
    }

    //changer le multi par doubler les dégâts
    multi(cible){
        if (this.pointsAventure > 0){
            console.log(`${this.prenom} attaque en traître sur ${cible.prenom}`);
            this.sneakAttack(cible);
            console.log(`multi sur ${cible.prenom} à ${cible.pvActuel} / ${cible.pvBase}`);
            this.pointsAventure = this.pointsAventure - 1;
        }else{
            console.log(`${this.prenom} n'a plus assez de point d'aventure pour lancer son multi`);
            this.corpsACorps(cible);
        }
        cible.checkHealth();
    }

    changerNiveau(){
        this.niveauActuel = this.niveauActuel + 1;
        this.pvBase = this.pvBase * 1.1;
        this.dgSupBackstab = this.dgSupBackstab + 1;
        console.log(`${this.prenom} passe au niveau ${this.niveauActuel}`);
    }
}