import { Ability } from "./Ability";
import { Stats } from "./Stats";
import { Status } from "./Status";

export class Pet {
    name: string;
    stats: Stats;
    ability: Ability
    status: Status

    constructor(name: string, stats: Stats, ability: Ability, status: Status) {
        this.name = name;
        this.stats = stats;
        this.ability = ability;
        this.status = status;
    }

    damage(damageAmount: number) {
        // TODO Check for damage modifications
        this.stats.reduceHealth(damageAmount);
    }
}