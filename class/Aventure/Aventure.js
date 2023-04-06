import Aventurier from "./Aventurier.js";
import Guerrier from './Guerrier.js';
import Voleur from './Voleur.js';
import Mage from './Mage.js';
import Arme from './Arme.js';
import Item from './Item.js';
import loaded, {s, sAll, q} from '../Utils.js';
import {randClasse, createP, fichePerso, fichePersoConsole} from'./MiseEnPlace.js';

/*

*/

let lAventurier = new Aventurier('Le barbare', 'Conan');
lAventurier.ajoutArme(new Arme('Glaive', 15))
lAventurier.changerArme('Glaive');
lAventurier.addItem( new Item('Casque à corne', 'headSlot', 'armor', 2, false));
lAventurier.equipItem('Casque à corne');
//console.log(fichePersoConsole(lAventurier));
console.log('test bagarre', lAventurier.testSkill('bagarre'));
console.log('test cerveau',lAventurier.testSkill('cerveau'));
console.log('');
lAventurier.addItem( new Item('Casque à corne en fer', 'headSlot', 'armor', 5, false));
lAventurier.equipItem('Casque à corne en fer');
console.log(fichePersoConsole(lAventurier));
console.log('');
let leMechant = new Mage('Le sorcier', 'Profion');
console.log(fichePersoConsole(leMechant));
console.log('test bagarre',leMechant.testSkill('bagarre'));
console.log('test cerveau',leMechant.testSkill('cerveau'));
console.log('');
leMechant.corpsACorps(lAventurier);
lAventurier.corpsACorps(leMechant);
//console.log(fichePersoConsole(leMechant));
leMechant.seSoigner();
//console.log(fichePersoConsole(leMechant));
lAventurier.multi(leMechant);
//console.log(fichePersoConsole(leMechant));
lAventurier.seSoigner();
let leGuerrier = new Guerrier('Le canard', 'Herbert');
console.log(fichePersoConsole(leGuerrier));
leMechant.seSoigner();
//console.log(fichePersoConsole(leMechant));
leGuerrier.multi(leMechant);
//console.log(fichePersoConsole(leMechant));
leMechant.seSoigner();
//console.log(fichePersoConsole(leMechant));
leGuerrier.corpsACorps(leMechant);
//console.log(fichePersoConsole(leMechant));
leGuerrier.changerNiveau();
console.log(fichePersoConsole(leGuerrier));

let leVoleur = new Voleur('Lupin', 'Arsène');
console.log(fichePersoConsole(leVoleur));
leVoleur.corpsACorps(leMechant);
//console.log(fichePersoConsole(leMechant));
leVoleur.multi(leMechant);
//console.log(fichePersoConsole(leMechant));
leMechant.seSoigner();
//console.log(fichePersoConsole(leMechant));

let leMage = new Mage('Le gris', 'Daflgan');
console.log(fichePersoConsole(leMage));
leMage.corpsACorps(leMechant);
//console.log(fichePersoConsole(leMechant));
leMage.multi(leMechant);
//console.log(fichePersoConsole(leMechant));
leMage.corpsACorps(leMechant);
//console.log(fichePersoConsole(leMechant));
leMage.corpsACorps(leMechant);
//console.log(fichePersoConsole(leMechant));
leMage.multi(leMechant);
//console.log(fichePersoConsole(leMechant));

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