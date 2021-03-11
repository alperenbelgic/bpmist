import { ProcessItem } from './ProcessItem';

export class ConditionItem extends ProcessItem {

  public constructor(
    id: string,
    public justCreatedOnInterface: boolean,
    retrievedFromServer: boolean = false,
    conditionName: string,
    topPx: number,
    leftPx: number) {
    super(id, justCreatedOnInterface, retrievedFromServer, topPx, leftPx, conditionName);
  }
}
