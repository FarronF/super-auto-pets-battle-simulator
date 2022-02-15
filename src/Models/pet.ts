import { IClonable } from "../Interfaces/iclonable";
import { Ability } from "./ability";
import { Stats } from "./stats";
import { Status } from "./status";

export class Pet implements IClonable {
    public name: string;
    public stats: Stats;
    public ability: Ability;
    public status: Status;

    constructor(name: string, stats: Stats, ability: Ability = new Ability(), status: Status = new Status()) {
        this.name = name;
        this.stats = stats;
        this.ability = ability;
        this.status = status;
    }
    

    damage(damageAmount: number) {
        // TODO Check for damage modifications
        this.stats.reduceHealth(damageAmount);
    }

    clone(): Pet {
        return new Pet(this.name, this.stats.clone(), this.ability, this.status); // TODO clone ability and status?
    }
}