import { BattleState } from "../../../Models/battle-state";
import { RulesHandler } from "../rules-handler";

export class ClashRuleHandler extends RulesHandler {
    implementRule(battleState: BattleState): BattleState[] {
        if (battleState.isOver()) {
            throw new Error('The battle is already over');
        }

        const clonedState = battleState.clone();

        const leftTeamCombatant = clonedState.leftTeam.getCombatant();
        const rightTeamCombatant = clonedState.rightTeam.getCombatant();

        if(!leftTeamCombatant || !rightTeamCombatant) {
            throw new Error('Not enough combatant');
        }

        // TODO handle other status/abilities here

        const leftTeamCombatantAttack = leftTeamCombatant;
        const rightTeamCombatantAttack = rightTeamCombatant;

        clonedState.leftTeam.attackedBy(rightTeamCombatantAttack);
        clonedState.rightTeam.attackedBy(leftTeamCombatantAttack);
        return [clonedState];
    }
}