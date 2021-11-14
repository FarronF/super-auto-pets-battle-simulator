import { Pet } from "./Pet";

export class Team {
    name: string;
    pets: Pet[];


    constructor(name: string, pets: Pet[]) {
        this.name = name;
        this.pets = pets;
    }

    getCombatant(): Pet | undefined {
        return this.pets.find(pet => !!pet);
    }

    petsAreGone(): boolean {
        return this.pets.every(pet => !pet);
    }


}