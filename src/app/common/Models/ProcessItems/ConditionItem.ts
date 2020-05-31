import { ProcessItem } from './ProcessItem';

export class ConditionItem extends ProcessItem {

  public constructor(
    id: string,
    retrievedFromServer: boolean = false,
    conditionName: string,
    topPx: number,
    leftPx: number) {
    super(id, retrievedFromServer, topPx, leftPx, conditionName);
  }
}
