

export default class Aventurier{
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
        this.bagarre = 3;
        this.cerveau = 3;
        //this.arme = new Arme('Mains nue', 2);
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
                res = deuxD6plusSkill(this.bagarre); 
            break;
            case 'cerveau':
                res = deuxD6plusSkill(this.cerveau); 
            break;
            default:
                res = deuxD6plusSkill();
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
        return [test, res];
    }
}