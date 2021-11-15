import { Pet } from "./pet";

export class Team {
    name: string;
    pets: Array<Pet | null | undefined>;
    size: number = 5;


    constructor(name: string, pets: Array<Pet | null | undefined>) {
        this.name = name;
        this.pets = pets;
    }

    getCombatant(): Pet | null | undefined {
        return this.pets.find(pet => !!pet);
    }

    hasPetAtFront(): boolean {
        return !!this.pets[0];
    }

    petsAreGone(): boolean {
        return this.pets.every(pet => !pet);
    }

    moveForward(spaces: number = 1): void {
        for(let i = 0; i < this.size - 1; i++) {
            if(!this.pets[i]) {
                this.pets[i] = this.pets[i+1];
                this.pets[i+1] = null;
            }
        }
    }

    attackedBy(attacker: Pet) {
        const defender = this.getCombatant();
        defender?.damage(attacker.stats.attack)
    }

    removeFainted() {
        this.pets.forEach((pet, index) => {
            if (!!pet && pet.stats.health <= 0) {
                this.pets[index] = null;
            }
        })
    }
}