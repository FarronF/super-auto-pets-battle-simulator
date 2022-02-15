import { BattleState } from '../Models/battle-state';
import { BattleStateTreeNode } from '../Models/battle-state-tree';
import { Pet } from '../Models/pet';
import { Stats } from '../Models/stats';
import { Team } from '../Models/team';
import { ClashRuleHandler } from './RulesHandlers/ClashRule/clash-rule-handler';
import { CleanUpRuleHandler } from './RulesHandlers/CleanUpRuleHandler/clean-up-rule-handler';
import { MoveRuleHandler } from './RulesHandlers/MoveRule/MoveRuleHandler';
import { RulesHandler } from './RulesHandlers/rules-handler';

export class BattleService {
  rules: RulesHandler[];


  constructor() {
    
    this.rules = [
      new ClashRuleHandler(),
      new CleanUpRuleHandler(),
      new MoveRuleHandler(),
    ];

    const leftTeam = new Team("Left Team", [
      new Pet("Dolphin", new Stats(4, 6)),
      new Pet("Ant", new Stats(2, 1)),
      null,
      new Pet("Duck", new Stats(1, 2)),
      new Pet("Bison", new Stats(6, 6)),
    ]);

    const rightTeam = new Team("Right Team", [
      new Pet("Beaver", new Stats(2, 2)),
      null,
      null,
      new Pet("Badger", new Stats(5, 4)),
      new Pet("Tiger", new Stats(4, 3)),
    ]);
    const startingBattleState = new BattleState(leftTeam, rightTeam);
    const startingNode = new BattleStateTreeNode(startingBattleState);

    startingNode.children = this.generateOutcomes(startingNode);
    // console.dir(startingNode, { depth: null });
    console.log('Faz - THIS ONE', JSON.stringify(startingNode));
  }

  generateOutcomes(node: BattleStateTreeNode, ruleIndex: number = 0): BattleStateTreeNode[] {
    if(ruleIndex >= this.rules.length) {
      ruleIndex = 0;
    }
    const rule = this.rules[ruleIndex];
    const outcomes = rule.implementRule(node.currentBattleState).map(potentialResult => new BattleStateTreeNode(potentialResult));
     outcomes.forEach(childNode => {
      if(!childNode.currentBattleState.isOver()) {
        childNode.children = this.generateOutcomes(childNode, ruleIndex + 1);
      }
    });
    return outcomes;
  }
}
