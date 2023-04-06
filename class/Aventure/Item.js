/*
les items des aventuriers

nom:    'nom item'
type:   headSlot, shieldSlot, plateSlot, braceSlot,  bootSlot
bonus:  {
        typeBonus:   'armor'
        valeur: nb dégats bloqués
        }
isEquiped: bool
    

*/
export default class Item{
    constructor(nom, type, typeBonus, valeur, isEquiped){
        this.nom = nom;
        this.type = type;
        this.typeBonus = typeBonus;
        this.valeur = valeur;
        this.isEquiped = isEquiped;
    }
}