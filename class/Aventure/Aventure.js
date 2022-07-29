import Aventurier from "./Aventurier.js";
import Guerrier from './Guerrier.js';
import Voleur from './Voleur.js';
import Mage from './Mage.js';
import loaded, {s, sAll} from '../Utils.js';
import {randClasse, createP} from'./MiseEnPlace.js';


let monAventurier = new Aventurier('Le barbare', 'Conan');
console.log(monAventurier);
monAventurier.arme.nom = 'Glaive';
monAventurier.arme.degats = 15;
console.log(monAventurier);
console.log(monAventurier.testSkill('bagarre'));
console.log(monAventurier.testSkill('cerveau'));

let monMechant = new Aventurier('Le sorcier', 'Profion');
console.log(monMechant);
monMechant.arme.nom = 'Bâton';
monMechant.arme.degats = 10;
console.log(monMechant);
console.log(monMechant.testSkill('bagarre'));
console.log(monMechant.testSkill('cerveau'));

monAventurier.taper(monMechant);
console.log(monMechant);
monMechant.soigner(monMechant, 50);
console.log(monMechant);
monAventurier.multi(monMechant);

let monGuerrier = new Guerrier('Le canard', 'Herbert');
console.log(monGuerrier);
monMechant.soigner(monMechant, 50);
monGuerrier.multi(monMechant);
monMechant.soigner(monMechant, 50);
monGuerrier.taper(monMechant);

let monVoleur = new Voleur('Lupin', 'Arsène');
console.log(monVoleur);
monVoleur.taper(monMechant);
monVoleur.multi(monMechant);
monMechant.soigner(monMechant, 50);
let monMage = new Mage('Le gris', 'Daflgan');
console.log(monMage);
monMage.taper(monMechant);
monMage.multi(monMechant);

loaded(function(){
    console.log(randClasse());
    
});