import { BattleState } from "../../../Models/BattleState";
import { RulesHandler } from "../RulesHandler";

export class ClashRuleHandler extends RulesHandler {
    implementRule(battleState: BattleState): BattleState {
        if (battleState.isOver()) {
            throw new Error('The battle is already over');
        }

        const leftTeamCombatant = battleState.leftTeam.getCombatant();
        const rightTeamCombatant = battleState.rightTeam.getCombatant();

        if(!leftTeamCombatant || !rightTeamCombatant) {
            throw new Error('Not enough combatant');
        }

        // TODO handle other status/abilities here

        const leftTeamCombatantAttack = leftTeamCombatant;
        const rightTeamCombatantAttack = rightTeamCombatant;

        battleState.leftTeam.attackedBy(rightTeamCombatantAttack);
        battleState.rightTeam.attackedBy(leftTeamCombatantAttack);

        return battleState;
    }
}