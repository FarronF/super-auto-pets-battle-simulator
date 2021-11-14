import { BattleState } from "../Models/BattleState";
import { RulesHandler } from "./RulesHandlers/RulesHandler";

export class BattleService {
    constructor(private rulesHandlers: RulesHandler[]) {
        
    }

    generateNextRoundOutcomes(battleState: BattleState) {
        
    }
}