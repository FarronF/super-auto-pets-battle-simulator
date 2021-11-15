import { BattleState } from "../../../Models/battle-state";
import { Pet } from "../../../Models/pet";
import { RulesHandler } from "../rules-handler";

export class MoveRuleHandler extends RulesHandler {
    implementRule(battleState: BattleState): BattleState {
        if (battleState.isOver()) {
            throw new Error('The battle is already over');
        }

        const leftTeam = battleState.leftTeam;
        const rightTeam = battleState.rightTeam;

        do {
            leftTeam.moveForward();
            rightTeam.moveForward();    
        } while(!(leftTeam.hasPetAtFront() && rightTeam.hasPetAtFront()))

        return battleState;
    }
}