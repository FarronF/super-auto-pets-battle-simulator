import { ITreeNode } from '../Interfaces/itreeNode';
import { BattleState } from './battle-state';

export class BattleStateTreeNode implements ITreeNode<BattleState> {
    currentBattleState: BattleState;

    constructor(currentBattleState: BattleState) {
        this.currentBattleState = currentBattleState;
    }

    children?: ITreeNode<BattleState>[];
}