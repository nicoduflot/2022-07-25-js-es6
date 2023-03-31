import Arme from "./Arme.js";

export default class Aventurier{
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
        this.bagarre = 3;
        this.cerveau = 3;
        this.arme = new Arme();
        this.tabArmes = [];
        this.tabArmes.push(this.arme);
        this.pvBase = 50;
        this.pvActuel = this.pvBase;
        this.niveauActuel = 1;
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

    modifierPV(valeur){
        if(this.pvActuel + valeur > this.pvBase){
            this.pvActuel = this.pvBase;
        }else{
            this.pvActuel += valeur;
        }
    }

    checkHealth(){
        if(this.pvActuel < 0){
            console.log(`${this.prenom} est hors de combat`);
        }
    }

    ajoutArme(arme){
        this.tabArmes.push(arme);
        console.log(`${this.nom} ajoute ${arme.nom} (dg : ${arme.degats}) à son inventaire`);
    }

    changerArme(search){
        for(let value of this.tabArmes){
            if(value.nom === search){
                console.log(`${this.prenom} change d'arme`);
                let oldArme = this.arme;
                this.arme = value;
                console.log(`Il remplace ${oldArme.nom} par ${this.arme.nom}`);
            }
        }
    }
  
    seSoigner(valeur){
        this.modifierPV(valeur);        
        console.log(`soin : ${this.prenom} à ${this.pvActuel} / ${this.pvBase}`);
    }

    taper(cible){
        let res = this.deuxD6plusSkill(this.bagarre);
        let degats = 0;
        let message = '';
        switch(true){
            case (res < 7):
                degats = 0;
                message = `${this.prenom} taper ${cible.prenom} : Le coup est raté`;
            break;
            case (res > 6 && res < 10):
                degats = Math.ceil(this.arme.degats/2);
                message = `${this.prenom} taper ${cible.prenom} : le coup occasionne la moitié des dégats : ${degats}`;
            break;
            case (res > 9 && res < 12):
                degats = this.arme.degats;
                message = `${this.prenom} taper ${cible.prenom} : le coup occasionne ${degats} degat(s)`;
            break;
            default:
                degats = this.arme.degats*2;
                message = `${this.prenom} taper ${cible.prenom} : CRIT ! Le coup occasione ${degats} degat(s)`;
        }
        cible.modifierPV(-degats);
        message = message + `, ${cible.prenom} à ${cible.pvActuel} / ${cible.pvBase}`;
console.log(message);
        cible.checkHealth();
    }

    multi(cible){
        console.log(`${this.prenom} lance son coup spécial sur ${cible.prenom}`);
        this.taper(cible);
        this.taper(cible);
    }

    changerNiveau(){
        this.niveauActuel = this.niveauActuel + 1;
        this.pvBase = this.pvBase * 1.1;
        console.log(`${this.prenom} passe au niveau ${this.niveauActuel}`);
    }
}