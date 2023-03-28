import Aventurier from "./Aventurier.js";
import Guerrier from './Guerrier.js';
import Voleur from './Voleur.js';
import Mage from './Mage.js';
import Arme from './Arme.js';
import loaded, {s, sAll, q} from '../Utils.js';
import {randClasse, createP, fichePerso, fichePersoConsole} from'./MiseEnPlace.js';

/*
let monAventurier = new Aventurier('Le barbare', 'Conan');
console.log(monAventurier);
console.log(monAventurier.prenom, monAventurier.arme);
monAventurier.ajoutArme(new Arme('Glaive', 15))
monAventurier.changerArme('Glaive');

console.log(monAventurier);
console.log(monAventurier.prenom, monAventurier.arme);
console.log('test bagarre', monAventurier.testSkill('bagarre'));
console.log('test cerveau',monAventurier.testSkill('cerveau'));

let monMechant = new Aventurier('Le sorcier', 'Profion');
console.log(monMechant);
console.log(monMechant.prenom, monMechant.arme);
monMechant.ajoutArme(new Arme('Bâton', 10));
monMechant.changerArme('Bâton');
console.log(monMechant);
console.log(monMechant.prenom, monMechant.arme);
console.log('test bagarre',monMechant.testSkill('bagarre'));
console.log('test cerveau',monMechant.testSkill('cerveau'));

monAventurier.taper(monMechant);
console.log(monMechant);
monMechant.soigner(monMechant, 50);
console.log(monMechant);
monAventurier.multi(monMechant);

let monGuerrier = new Guerrier('Le canard', 'Herbert');
console.log(monGuerrier);
console.log(monGuerrier.tabArmes);
monMechant.soigner(monMechant, 50);
monGuerrier.multi(monMechant);
monMechant.soigner(monMechant, 50);
monGuerrier.taper(monMechant);
monGuerrier.changerNiveau();
console.log(monGuerrier);

let monVoleur = new Voleur('Lupin', 'Arsène');
console.log(monVoleur);
monVoleur.taper(monMechant);
monVoleur.multi(monMechant);
monMechant.soigner(monMechant, 50);
let monMage = new Mage('Le gris', 'Daflgan');
console.log(monMage);
monMage.taper(monMechant);
monMage.multi(monMechant);
monMage.taper(monMechant);
monMage.taper(monMechant);
monMage.multi(monMechant);
*/
loaded(function(){
    let gentil = null;
    let mechant = null;
    s('#createP').addEventListener('click', function(){
        gentil = createP(s('#prenomP').value, s('#nomP').value, s('#classeP').value);
        s('#ficheP').append(fichePerso(gentil));
        console.log(fichePersoConsole(gentil));
    });

    s('#createE').addEventListener('click', function(){
        mechant = createP(s('#prenomE').value, s('#nomE').value, randClasse());
        s('#ficheE').append(fichePerso(mechant));
        console.log(fichePersoConsole(mechant));
    });
});