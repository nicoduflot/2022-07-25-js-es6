import Aventurier from "./Aventurier.js";
import Guerrier from './Guerrier.js';
import Voleur from './Voleur.js';
import Mage from './Mage.js';
import Arme from './Arme.js';
import Item from './Item.js';
import loaded, { s, sAll, q, erase_childs } from '../Utils.js';
import { randClasse, createP, fichePerso, fichePersoConsole } from './MiseEnPlace.js';
loaded(function () {
    /*
    let lAventurier = new Aventurier('Le barbare', 'Conan');
    let casque = new Item('Casque à corne', 'headSlot', 'armor', 2, false);
    let casquePlus = new Item('Casque à corne en fer', 'headSlot', 'armor', 2, false);
    let brassard = new Item('Brassard', 'braceSlot', 'armor', 1, false);
    let glaive = new Arme('Glaive', 15, { nom: 'Brulûre' });

    console.log(lAventurier.sacADos.ajoutElement(brassard));
    console.log(lAventurier.sacADos.ajoutElement(casque));
    console.log(lAventurier.sacADos.ajoutElement(casquePlus));
    console.log(lAventurier.sacADos.ajoutElement(glaive));

    console.log('');
    console.log(lAventurier.sacADos.retireElement(casque));
    console.log('');

    lAventurier.sacADos.ajoutElement(new Arme('Glaive', 15, { nom: 'Brûlure', dgSup: 10 }))
    lAventurier.changerArme('Glaive');

    lAventurier.sacADos.ajoutElement(new Item('Casque à corne', 'headSlots', 'armor', 2, false));
    lAventurier.equipItem('Casque à corne');

    console.log('test bagarre', lAventurier.testSkill('bagarre'));
    console.log('test cerveau', lAventurier.testSkill('cerveau'));
    console.log('');
    lAventurier.sacADos.ajoutElement(new Item('Casque à corne en fer', 'headSlots', 'armor', 5, false));
    lAventurier.equipItem('Casque à corne en fer');
    console.log(fichePersoConsole(lAventurier));
    console.log('');
    q('#inventaireConsole').append(lAventurier.sacADos.afficherInventaire());
    let leMechant = new Mage('Le sorcier', 'Profion');
    console.log(fichePersoConsole(leMechant));
    console.log('test bagarre', leMechant.testSkill('bagarre'));
    console.log('test cerveau', leMechant.testSkill('cerveau'));
    console.log('');
    leMechant.corpsACorps(lAventurier);
    lAventurier.corpsACorps(leMechant);

    leMechant.seSoigner();

    lAventurier.multi(leMechant);

    lAventurier.seSoigner();
    let leGuerrier = new Guerrier('Le canard', 'Herbert');
    console.log(fichePersoConsole(leGuerrier));
    leMechant.seSoigner();

    leGuerrier.multi(leMechant);

    leMechant.seSoigner();

    leGuerrier.corpsACorps(leMechant);

    leGuerrier.changerNiveau();
    console.log(fichePersoConsole(leGuerrier));

    let leVoleur = new Voleur('Lupin', 'Arsène');
    console.log(fichePersoConsole(leVoleur));
    leVoleur.corpsACorps(leMechant);

    leVoleur.multi(leMechant);

    leMechant.seSoigner();

    let leMage = new Mage('Le gris', 'Daflgan');
    console.log(fichePersoConsole(leMage));
    leMage.corpsACorps(leMechant);

    leMage.multi(leMechant);

    leMage.corpsACorps(leMechant);

    leMage.corpsACorps(leMechant);

    leMage.multi(leMechant);

*/
    let gentil = null;
    let mechant = null;
    q('#createP').addEventListener('click', function () {
        gentil = createP(q('#prenomP').value, q('#nomP').value, q('#classeP').value);
        erase_childs(q('#ficheP'));
        q('#ficheP').append(fichePerso(gentil));
        console.log(fichePersoConsole(gentil));
        erase_childs(q('#inventaireHeros'));
        q('#inventaireHeros').append(gentil.sacADos.afficherInventaire());
    });
    
    s('#createE').addEventListener('click', function () {
        mechant = createP(q('#prenomE').value, q('#nomE').value, randClasse());
        erase_childs(s('#ficheE'));
        s('#ficheE').append(fichePerso(mechant));
        console.log(fichePersoConsole(mechant));
        erase_childs(q('#inventaireMechant'));
        q('#inventaireMechant').append(mechant.sacADos.afficherInventaire());
    });
});