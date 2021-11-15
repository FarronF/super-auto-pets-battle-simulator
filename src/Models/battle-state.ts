import { Pet } from "./pet";
import { Team } from "./team";

export class BattleState {
    constructor(public leftTeam: Team, public rightTeam: Team) {

    }

    isOver() : boolean {
        return this.leftTeam.petsAreGone() || this.rightTeam.petsAreGone()
    }


}