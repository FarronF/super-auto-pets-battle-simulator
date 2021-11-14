import { BattlePet } from "../../../Models/BattlePet";
import { BattleState } from "../../../Models/BattleState";
import { RulesHandler } from "../RulesHandler";

export class ClashRuleHandler extends RulesHandler {
    implementRule(battleState: BattleState): BattleState {
        if (battleState.isOver()) {
            throw new Error('The battle is already over');
        }

        if (this.bothTeamsHavePetsInFrontRow(battleState)) {
            throw new Error('Pets are not in the front row');
        }

        const leftTeamCombatant = battleState.leftTeam[0];
        const rightTeamCombatant = battleState.rightTeam[0];

        // TODO handle other status/abilities here

        const leftTeamCombatantAttack = leftTeamCombatant.stats.attack;
        const rightTeamCombatantAttack = rightTeamCombatant.stats.attack;

        leftTeamCombatant.damage(rightTeamCombatantAttack);
        rightTeamCombatant.damage(leftTeamCombatantAttack);

        return battleState;
    }

    private bothTeamsHavePetsInFrontRow(battleState: BattleState) : boolean {
        return this.teamHasPetInFrontRow(battleState.leftTeam) && this.teamHasPetInFrontRow(battleState.rightTeam);
    }

    private teamHasPetInFrontRow(team: BattlePet[]) : boolean {
        return !!team[0];
    }
}