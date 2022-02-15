import { IClonable } from '../Interfaces/iclonable';
import { Team } from './team';

export class BattleState implements IClonable {
    constructor(public leftTeam: Team, public rightTeam: Team) {

    }

    public isOver() : boolean {
        return this.leftTeam.petsAreGone() || this.rightTeam.petsAreGone()
    }

    public clone(): BattleState {
        return new BattleState(this.leftTeam.clone(), this.rightTeam.clone());
    }
}