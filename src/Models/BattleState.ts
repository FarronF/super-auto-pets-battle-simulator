import { Pet } from "./Pet";
import { Team } from "./Team";

export class BattleState {
    constructor(public leftTeam: Team, public rightTeam: Team) {

    }

    isOver() : boolean {
        return this.leftTeam.petsAreGone() || this.rightTeam.petsAreGone()
    }


}