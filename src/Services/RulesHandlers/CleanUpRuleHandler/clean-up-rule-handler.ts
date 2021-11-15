import { BattleState } from "../../../Models/battle-state";
import { RulesHandler } from "../rules-handler";

export class CleanUpRuleHandler extends RulesHandler {
    implementRule(battleState: BattleState): BattleState {
        if (battleState.isOver()) {
            throw new Error('The battle is already over');
        }

        const leftTeam = battleState.leftTeam;
        const rightTeam = battleState.rightTeam;

        leftTeam.removeFainted();
        rightTeam.removeFainted();

        return battleState;
    }
}