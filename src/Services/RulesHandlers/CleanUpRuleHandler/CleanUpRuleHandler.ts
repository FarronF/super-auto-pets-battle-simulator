import { BattleState } from "../../../Models/BattleState";
import { RulesHandler } from "../RulesHandler";

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