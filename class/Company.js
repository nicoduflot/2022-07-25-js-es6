import {User} from './User.js';

export default class Company{
    constructor(name){
        this.name = name;
    }
}

export class Employee extends User{
    constructor(name, job){
        super(name);
        this.truc = 'truc';
        this.job = job;
    }
}


export class Menuisier extends Employee{
    constructor(name){
        super(name);
        this.job = 'Menuisier';
    }
}