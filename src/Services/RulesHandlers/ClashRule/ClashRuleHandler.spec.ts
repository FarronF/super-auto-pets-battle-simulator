import { Pet } from "../../../Models/Pet";
import { BattleState } from "../../../Models/BattleState";
import { ClashRuleHandler } from "./ClashRuleHandler";
import { Team } from "../../../Models/Team";
import { Stats } from "../../../Models/Stats";

describe('ClashRuleHandler', () => {
    let clashRulesHandler: ClashRuleHandler;
    let battleState: jasmine.SpyObj<BattleState>;
    let leftTeam: jasmine.SpyObj<Team>;
    let rightTeam: jasmine.SpyObj<Team>;
    let leftCombatant: jasmine.SpyObj<Pet>;
    let rightCombatant: jasmine.SpyObj<Pet>;

    beforeEach(() => {
        battleState = jasmine.createSpyObj<BattleState>('BattleState', ['isOver']);
        leftTeam = jasmine.createSpyObj<Team>('Team', ['getCombatant']);
        rightTeam = jasmine.createSpyObj<Team>('Team', ['getCombatant']);

        leftCombatant = jasmine.createSpyObj<Pet>('Pet', ['damage']);
        rightCombatant = jasmine.createSpyObj<Pet>('Pet', ['damage']);

        leftCombatant.stats = new Stats(11, 22);
        rightCombatant.stats = new Stats(33, 44);

        leftTeam.getCombatant.and.returnValue(leftCombatant);
        rightTeam.getCombatant.and.returnValue(rightCombatant);

        battleState.isOver.and.returnValue(false);
        battleState.leftTeam = leftTeam;
        battleState.rightTeam = rightTeam;

        clashRulesHandler = new ClashRuleHandler();
    });

    it('should throw an error if battleState.isOver returns true', () => {
        battleState.isOver.and.returnValue(true);
        expect(() => clashRulesHandler.implementRule(battleState)).toThrow();
    });

    describe(`when a team doesn't return a combatant`, () => {
        it(`should throw an error if left team doesn't return combatant`, () => {
            leftTeam.getCombatant.and.returnValue(undefined);
            expect(() => clashRulesHandler.implementRule(battleState)).toThrow();
        });

        it(`should throw an error if right team doesn't return combatant`, () => {
            rightTeam.getCombatant.and.returnValue(undefined);
            expect(() => clashRulesHandler.implementRule(battleState)).toThrow();
        });

        it(`should throw an error if both teams don't return combatants`, () => {
            leftTeam.getCombatant.and.returnValue(undefined);
            rightTeam.getCombatant.and.returnValue(undefined);
            expect(() => clashRulesHandler.implementRule(battleState)).toThrow();
        });
    });

    it('should call damage function on both combatants', () => {
        clashRulesHandler.implementRule(battleState);

        expect(leftCombatant.damage).toHaveBeenCalledWith(rightCombatant.stats.attack);
        expect(rightCombatant.damage).toHaveBeenCalledWith(leftCombatant.stats.attack);
    });
});