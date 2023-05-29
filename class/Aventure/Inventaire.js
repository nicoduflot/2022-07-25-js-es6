import {q, cEO, cTN} from '../Utils.js';
export default class Inventaire{
    constructor(inventaire = []){
        this.inventaire = inventaire;
    }

    ajoutElement(element){
        console.log('avant ajout ',this.inventaire);
        this.inventaire.push(element);
        console.log('après ajout ',this.inventaire);
        let message = `objet du type ${element.constructor.name} ajouté : ${element.nom}`;
        return message;
    }

    retireElement(element){
        let message = false;
        this.inventaire.find((item, index)=>{
            if(item === element){
                message = `Élément du type ${element.constructor.name} : ${element.nom} trouvé a retirer de l'inventaire`;
                console.log('avant retire ',this.inventaire);
                this.inventaire.splice(index, 1);
                console.log('après retire ',this.inventaire);
                return message;
            }
        });
        return message;
    }

    afficherItem(element, style = 'none'){
        let ul = cEO('ul');
        for(let key in element){
            let li = cEO('li',{}, ul);
            if(typeof element[key] !== 'object'){
                cTN(`${key} : ${element[key]}`, li);
                (!(style === 'none'))? console.log(`${key} : ${element[key]}`) : false ;
                
            }else{
                cTN(`${key} : `, li);
                (!(style === 'none'))? console.log(`${key} : `) : false ;
                let ulS = cEO('ul', {}, li);
                ulS.append(this.afficherItem(element[key], style));
            }
        }
        return ul;
    }

    afficherInventaire(style = 'none'){
        let ul = cEO('ul', {'class': ['list-group']});
        (!(style === 'none'))? console.log(`dans l'inventaire il y a ${this.inventaire.length} élément(s)`) : false ;
        (!(style === 'none'))? console.log('') : false ;
        this.inventaire.map((element, index)=>{
            let li = cEO('li', {'class': ['list-group-item']}, ul);
            (!(style === 'none'))? console.log('') : false ;
            (!(style === 'none'))? console.log(`Objet n° ${index+1} du type ${element.constructor.name}`) : false ;
            li.append(this.afficherItem(element, style));
        });
        return ul;
    }
}