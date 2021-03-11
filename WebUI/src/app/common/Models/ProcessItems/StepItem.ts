import { ProcessItem } from './ProcessItem';
import { StepItemVisualState } from './StepItemVisualState';
import { FieldInStep } from '../Field/FieldInStep';
import { Responsible } from '../Responsible/Responsible';
import { ResponsibleType } from '../Responsible/ResponsibleType';
import { GroupAssignOption } from '../Responsible/GroupAssignOption';

export class StepItem extends ProcessItem {

  responsible: Responsible;
  fieldsInStep: FieldInStep[] = [];

  public constructor(
    id: string,
    public justCreatedOnInterface: boolean,
    retrievedFromServer: boolean = false,
    stepName: string,
    topPx: number,
    leftPx: number,
    defaultResponsibleType: ResponsibleType,
    defaultGroupAssignOption: GroupAssignOption) {
    super(id, justCreatedOnInterface, retrievedFromServer, topPx, leftPx, stepName);

    this.responsible = new Responsible(defaultResponsibleType, null, defaultGroupAssignOption);

    this._visualState = new StepItemVisualState(this);
  }

  get visualState(): StepItemVisualState {
    return this._visualState;
  }
}
