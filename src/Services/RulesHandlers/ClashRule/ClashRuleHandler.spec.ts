import { BattlePet } from "../../../Models/BattlePet";
import { BattleState } from "../../../Models/BattleState";
import { ClashRuleHandler } from "./ClashRuleHandler";

describe('ClashRuleHandler', () => {
    let clashRulesHandler: ClashRuleHandler;
    let battleState: jasmine.SpyObj<BattleState>;
    let leftTeam: BattlePet[];

    beforeEach(() => {
        battleState = jasmine.createSpyObj<BattleState>('BattleState', ['isOver'])

        clashRulesHandler = new ClashRuleHandler();
    })

    it('should throw an error if battleState.isOver returns true', () => {
        battleState.isOver.and.returnValue(true);
        expect(() => clashRulesHandler.implementRule(battleState)).toThrow();
    })

    it('should throw an error if battleState.isOver returns true', () => {
        battleState.isOver.and.returnValue(true);
        expect(() => clashRulesHandler.implementRule(battleState)).toThrow();
    })
})