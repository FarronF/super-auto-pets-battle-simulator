import { BattlePet } from "./BattlePet";

export class BattleState {
    constructor(public leftTeam: BattlePet[], public rightTeam: BattlePet[]) { // TODO Change teams to own model

    }

    isOver() : boolean {
        return this.teamsPetsAreAllGone(this.leftTeam) || this.teamsPetsAreAllGone(this.rightTeam);
    }

    private teamsPetsAreAllGone(team: BattlePet[]) {
        return team.every(pet => !pet);
    }
}