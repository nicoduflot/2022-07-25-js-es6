import Arme from "./Arme.js";

export default class Aventurier{
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
        this.bagarre = 3;
        this.cerveau = 3;
        this.arme = new Arme();
        this.pvBase = 50;
        this.pvActuel = this.pvBase;
    }

    deuxD6plusSkill(valSkill = 0){
        let res = 0;
        res += Math.floor( Math.random()*6 + 1);
        res += Math.floor( Math.random()*6 + 1);
        res += valSkill;
        return res;
    }

    testSkill(type){
        let res = 0;
        switch(type){
            case 'bagarre': 
                res = this.deuxD6plusSkill(this.bagarre); 
            break;
            case 'cerveau':
                res = this.deuxD6plusSkill(this.cerveau); 
            break;
            default:
                res = this.deuxD6plusSkill();
        }
        let test = '';
        switch(true){   /* 
                        dans le mdn en anglais (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
                        pour pouvoir faire les comparaisons dans les case 
                        la valeur de test du switch doit être vraie (true)
                        ainsi, chaque case peux contenir des opérations logiques
                        */
            case (res < 7):
                 test = `2d6 + ${type} : ${res} => raté`;
            break;
            case (res > 6 && res < 10):
                 test = `2d6 + ${type} : ${res} => réussi mais...`;
            break;
            default:
                 test = `2d6 + ${type} : ${res} => réussi !`;
        }
        return test;
    }

    modifierPV(cible, valeur, type){
        if(type == '-'){
            cible.pvActuel -= valeur;
        }else{
            if(cible.pvActuel + valeur > cible.pvBase){
                cible.pvActuel = cible.pvBase;
            }else{
                cible.pvActuel += valeur;
            }
        }
    }

    soigner(cible, valeur){
        this.modifierPV(cible, valeur, '+');
        console.log(`${cible.prenom} à ${cible.pvActuel} / ${cible.pvBase}`);
    }

    taper(cible){
        let res = this.deuxD6plusSkill(this.bagarre);
        let degats = 0;
        switch(true){
            case (res < 7):
                degats = 0;
                console.log('Le coup est raté');
            break;
            case (res > 6 && res < 10):
                degats = Math.ceil(this.arme.degats/2);
                console.log(`le coup occasionne 1/2 dégats : ${degats}`);
            break;
            case (res > 9 && res < 12):
                degats = this.arme.degats;
                console.log(`le coup occasionne ${degats} degat(s)`);
            break;
            default:
                degats = this.arme.degats*2;
                console.log(`CRIT ! Le coup occasione ${degats} degat(s)`);
        }
        this.modifierPV(cible, degats, '-');
        console.log(`${cible.prenom} à ${cible.pvActuel} / ${cible.pvBase}`);
    }

    multi(cible){
        console.log(`${this.prenom} lance son coup spécial`);
        this.taper(cible);
        this.taper(cible);
    }
}