import Arme from "./Arme.js";
import Inventaire from "./Inventaire.js";

export default class Aventurier {
    constructor(nom, prenom) {
        this.nom = nom; this.prenom = prenom; this.bagarre = 3; this.cerveau = 3;
        this.pvBase = 50; this.pvActuel = this.pvBase; this.niveauActuel = 1; this.maxPointsAventure = 5;
        this.sMoney = 50; this.aMoney = this.sMoney;
        this.tauxSoin = 0.2;
        this.pointsAventure = 5; this.arme = new Arme();
        this.armor = 0;
        this.maxHeadSlots = 1; this.headSlots = 0; this.maxShieldSlots = 1; this.shieldSlots = 0;
        this.maxPlateSlots = 1; this.plateSlots = 0; this.maxBraceSlots = 2; this.braceSlots = 0;
        this.maxBootSlots = 1; this.bootSlots = 0;

        this.sacADos = new Inventaire();
        this.sacADos.ajoutElement(this.arme);

        /*
        this.maxPotionSlots = 4; this.potionSlots = 0;
        this.maxRingSlots = 2;   this.ringSlots = 0;
        this.maxAmuletSlots = 2; this.amuletSlots = 0;
        */
    }

    deuxD6plusSkill(valSkill = 0) {
        let res = 0;
        res += Math.floor(Math.random() * 6 + 1);
        res += Math.floor(Math.random() * 6 + 1);
        res += valSkill;
        return res;
    }

    testSkill(type) {
        let res = 0;
        switch (type) {
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
        switch (true) {   /* 
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

    modifierPV(valeur) {
        if (this.pvActuel + valeur > this.pvBase) {
            this.pvActuel = this.pvBase;
        } else {
            this.pvActuel += valeur;
        }
    }

    checkHealth() {
        if (this.pvActuel < 0) {
            console.log(`${this.prenom} est hors de combat`);
        }
    }


    changerArme(search) {
        for (let value of this.sacADos.inventaire) {
            if (value.nom === search) {
                if (value.constructor.name === 'Arme') {
                    console.log(`${this.prenom} change d'arme`);
                    let oldArme = this.arme;
                    this.arme = value;
                    console.log(`Il remplace ${oldArme.nom} par ${this.arme.nom}`);
                } else {
                    console.log(`${value.nom} n'est pas une arme, c'est un item de type ${value.type}`);
                }
            }
        }
    }

    activeItem(item) {
        item.isEquiped = true;
        if (item.typeBonus === 'armor') {
            this.armor = this.armor + item.valeur;
            console.log(`${this.prenom} s'équipe avec ${item.nom}, armure : ${this.armor}`);
        }
    }
    
    desactiveItem(equipedItem, slot) {
        console.log(`${this.prenom} a tous ses  ${equipedItem.type} de complet`);
        equipedItem.isEquiped = false;
        if (equipedItem.typeBonus === 'armor') {
            this.armor = this.armor - equipedItem.valeur;
            console.log(`${this.prenom} enlève  ${equipedItem.nom}, armure : ${this.armor}`);
        }
    }

    equipItem(itemName) {
        for (let item of this.sacADos.inventaire) {
            if (item.nom === itemName) {
                if (item.constructor.name === 'Item') {
                    switch (item.type) {
                        case 'headSlots':
                            if (this.headSlots < this.maxHeadSlots) {
                                this.activeItem(item);
                                this.headSlots = this.headSlots + 1;
                            } else {
                                for(let equipedItem of this.sacADos.inventaire){
                                    if (equipedItem.type === item.type && equipedItem.isEquiped) {
                                        this.desactiveItem(equipedItem);
                                        this.headSlots = this.headSlots - 1;
                                        break;
                                    }
                                }
                                this.activeItem(item);
                                this.headSlots = this.headSlots + 1;
                            }
                            break;
                        case 'shieldSlots':
                            if (this.shieldSlots < this.maxShieldSlots) {
                                this.activeItem(item);
                                this.shieldSlots = this.shieldSlots + 1;
                            } else {
                                for (let equipedItem of this.sacADos) {
                                    if (equipedItem.type === item.type && equipedItem.isEquiped) {
                                        this.desactiveItem(equipedItem);
                                        this.shieldSlots = this.shieldSlots - 1;
                                        break;
                                    }
                                }
                                this.activeItem(item);
                                this.shieldSlots = this.shieldSlots + 1;
                            }
                            break;
                        case 'plateSlots':
                            if (this.plateSlots < this.maxPlateSlots) {
                                this.activeItem(item);
                                this.plateSlots = this.plateSlots + 1;
                            } else {
                                for (let equipedItem of this.sacADos) {
                                    if (equipedItem.type === item.type && equipedItem.isEquiped) {
                                        this.desactiveItem(equipedItem);
                                        this.plateSlots = this.plateSlots - 1;
                                        break;
                                    }
                                }
                                this.activeItem(item);
                                this.plateSlots = this.plateSlots + 1;
                            }
                            break;
                        case 'braceSlots':
                            if (this.braceSlots < this.maxBraceSlots) {
                                this.activeItem(item);
                                this.braceSlots = this.braceSlots + 1;
                            } else {
                                for (let equipedItem of this.sacADos) {
                                    if (equipedItem.type === item.type && equipedItem.isEquiped) {
                                        this.desactiveItem(equipedItem);
                                        this.braceSlots = this.braceSlots - 1;
                                        break;
                                    }
                                }
                                this.activeItem(item);
                                this.braceSlots = this.braceSlots + 1;
                            }
                            break;
                        case 'bootSlots':
                            if (this.bootSlots < this.maxBootSlots) {
                                this.activeItem(item);
                                this.bootSlots = this.bootSlots + 1;
                            } else {
                                for (let equipedItem of this.sacADos) {
                                    if (equipedItem.type === item.type && equipedItem.isEquiped) {
                                        this.desactiveItem(equipedItem);
                                        this.bootSlots = this.bootSlots - 1;
                                        break;
                                    }
                                }
                                this.activeItem(item);
                                this.bootSlots = this.bootSlots + 1;
                            }
                            break;
                        default:
                        /* */
                    }

                } else {
                    console.log(`${value.nom} n'est pas un item, c'est ${value.constructor.name}`);
                }
            }
        }
    }

    seSoigner() {
        let valeur = this.pvBase*this.tauxSoin;
        if (this.pointsAventure > 0) {
            this.modifierPV(valeur);
            console.log(`soin : ${this.prenom} à ${this.pvActuel} / ${this.pvBase}`);
            this.pointsAventure = this.pointsAventure - 1;
        } else {
            console.log(`soin : ${this.prenom} n'a plus assez de points d'aventure pour se soigner`);
        }
    }

    corpsACorps(cible) {
        let res = this.deuxD6plusSkill(this.bagarre);
        let degats = 0;
        let message = '';
        switch (true) {
            case (res < 7):
                degats = 0;
                message = `${this.prenom} taper ${cible.prenom} : Le coup est raté`;
                break;
            case (res > 6 && res < 10):
                degats = Math.floor(this.arme.degats / 2);
                message = `${this.prenom} taper ${cible.prenom} : le coup occasionne la moitié des dégats : ${degats}`;
                break;
            case (res > 9 && res < 14):
                degats = this.arme.degats;
                message = `${this.prenom} taper ${cible.prenom} : le coup occasionne ${degats} degat(s)`;
                break;
            default:
                degats = this.arme.degats * 2;
                message = `${this.prenom} taper ${cible.prenom} : CRIT ! Le coup occasione ${degats} degat(s)`;
        }
        if(degats <= cible.armor && res > 6){
            message = message + `l'armure de la cible (${cible.armor}) absorbe les dg : ${degats}`;
            degats = 0;
        }else{
            if(cible.armor > 0 && res > 6){
                message = message + `l'armure de ${cible.prenom} absorbe ${cible.armor} dégats`;
            }
            degats = degats - cible.armor;
            cible.modifierPV(-degats);
            message = message + `, ${cible.prenom} à ${cible.pvActuel} / ${cible.pvBase}`;
        }
        console.log(message);
        cible.checkHealth();
    }

    multi(cible) {
        if (this.pointsAventure > 0) {
            console.log(`${this.prenom} lance son coup spécial sur ${cible.prenom}`);
            this.corpsACorps(cible);
            this.corpsACorps(cible);
            this.pointsAventure = this.pointsAventure - 1;
        }else{
            console.log(`${this.prenom} n'a plus assez de point d'aventure pour lancer son multi`);
            this.corpsACorps(cible);
        }
        cible.checkHealth();
    }

    changerNiveau() {
        this.maxPointsAventure = this.maxPointsAventure + 1;
        this.niveauActuel = this.niveauActuel + 1;
        this.pvBase = this.pvBase * 1.1;
        this.tauxSoin = this.tauxSoin + 0.1;
        console.log(`${this.prenom} passe au niveau ${this.niveauActuel}`);
    }
}