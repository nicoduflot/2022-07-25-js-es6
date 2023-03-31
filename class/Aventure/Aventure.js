import Aventurier from "./Aventurier.js";
import Guerrier from './Guerrier.js';
import Voleur from './Voleur.js';
import Mage from './Mage.js';
import Arme from './Arme.js';
import loaded, {s, sAll, q} from '../Utils.js';
import {randClasse, createP, fichePerso, fichePersoConsole} from'./MiseEnPlace.js';

/*

*/

let monAventurier = new Aventurier('Le barbare', 'Conan');
monAventurier.ajoutArme(new Arme('Glaive', 15))
monAventurier.changerArme('Glaive');
console.log(fichePersoConsole(monAventurier));
console.log('test bagarre', monAventurier.testSkill('bagarre'));
console.log('test cerveau',monAventurier.testSkill('cerveau'));
console.log('');
let monMechant = new Aventurier('Le sorcier', 'Profion');
monMechant.ajoutArme(new Arme('Bâton', 10));
monMechant.changerArme('Bâton');
console.log(fichePersoConsole(monMechant));
console.log('test bagarre',monMechant.testSkill('bagarre'));
console.log('test cerveau',monMechant.testSkill('cerveau'));
console.log('');
monAventurier.taper(monMechant);
console.log(fichePersoConsole(monMechant));
monMechant.seSoigner(50);
console.log(fichePersoConsole(monMechant));
monAventurier.multi(monMechant);
console.log(fichePersoConsole(monMechant));

let monGuerrier = new Guerrier('Le canard', 'Herbert');
console.log(fichePersoConsole(monGuerrier));
monMechant.seSoigner(50);
console.log(fichePersoConsole(monMechant));
monGuerrier.multi(monMechant);
console.log(fichePersoConsole(monMechant));
monMechant.seSoigner(50);
console.log(fichePersoConsole(monMechant));
monGuerrier.taper(monMechant);
console.log(fichePersoConsole(monMechant));
monGuerrier.changerNiveau();
console.log(fichePersoConsole(monGuerrier));

let monVoleur = new Voleur('Lupin', 'Arsène');
console.log(fichePersoConsole(monVoleur));
monVoleur.taper(monMechant);
console.log(fichePersoConsole(monMechant));
monVoleur.multi(monMechant);
console.log(fichePersoConsole(monMechant));
monMechant.seSoigner(50);
console.log(fichePersoConsole(monMechant));

let monMage = new Mage('Le gris', 'Daflgan');
console.log(fichePersoConsole(monMage));
monMage.taper(monMechant);
console.log(fichePersoConsole(monMechant));
monMage.multi(monMechant);
console.log(fichePersoConsole(monMechant));
monMage.taper(monMechant);
console.log(fichePersoConsole(monMechant));
monMage.taper(monMechant);
console.log(fichePersoConsole(monMechant));
monMage.multi(monMechant);
console.log(fichePersoConsole(monMechant));

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