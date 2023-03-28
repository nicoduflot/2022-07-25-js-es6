// les armes des aventuriers
export default class Arme{
    constructor(nom = 'Mains Nues', degats = 5, enchantement = {}){
        this.nom = nom;
        this.degats = degats;
        this.enchantement = enchantement;
    }
}