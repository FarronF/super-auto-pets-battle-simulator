import { IClonable } from "../Interfaces/iclonable";

export class Stats implements IClonable {
    public attack: number;
    public health: number;

    constructor(attack: number, health: number) {
        this.attack = attack;
        this.health = health;
    }

    public reduceHealth(amount: number) {
        this.health = this.health - amount;
    }

    clone(): Stats {
        return new Stats(this.attack, this.health);
    }
}