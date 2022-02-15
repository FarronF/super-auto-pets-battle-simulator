import { BattleState } from "../../Models/battle-state";

export abstract class RulesHandler {
    abstract implementRule(battleState: BattleState): BattleState[]
}