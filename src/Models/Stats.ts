export class Stats {
    public attack: number;
    public health: number;

    constructor(attack: number, health: number) {
        this.attack = attack;
        this.health = health;
    }

    public reduceHealth(amount: number) {
        this.health -= amount;
    }
}