import Aventurier from "./Aventurier.js";
export default class Guerrier extends Aventurier{
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
        this.bagarre = 3; // ici c'est 4
        this.cerveau = 3; // ici c'est 2
        this.arme = new Arme(); // arme par défaut un truc de bourrin mais moins que conan
        this.pvBase = 50; // plus de PV + 20
        this.pvActuel = this.pvBase;
    }

    //changer le multi par doubler les dégâts
}