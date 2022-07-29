import Aventurier from "./Aventurier.js";

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
monMechant.soigner(monMechant, Math.floor(Math.random()*10 + 5));
console.log(monMechant);
monAventurier.multi(monMechant);