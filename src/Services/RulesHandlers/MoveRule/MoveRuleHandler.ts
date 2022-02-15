import { BattleState } from '../../../Models/battle-state';
import { RulesHandler } from '../rules-handler';

export class MoveRuleHandler extends RulesHandler {
    implementRule(battleState: BattleState): BattleState[] {
        if (battleState.isOver()) {
            throw new Error('The battle is already over');
        }
        console.log('Faz - battleState', battleState);
        
        const clonedState = battleState.clone();
        const leftTeam = clonedState.leftTeam;
        const rightTeam = clonedState.rightTeam;

        do {
            leftTeam.movePetsForward();
            rightTeam.movePetsForward();
        } while(!(leftTeam.hasPetAtFront() && rightTeam.hasPetAtFront()));

        return [clonedState];
    }
}