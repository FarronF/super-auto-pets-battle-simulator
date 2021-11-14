import { BattleState } from "../../Models/BattleState";

export abstract class RulesHandler {
    abstract implementRule(battleState: BattleState): BattleState
}