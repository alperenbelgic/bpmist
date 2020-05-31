import { ProcessItem } from './ProcessItem';
import { StepItemVisualState } from './StepItemVisualState';
import { FieldInStep } from '../Field/FieldInStep';
import { Responsible } from '../Responsible/Responsible';

export class StepItem extends ProcessItem {

  responsible: Responsible = new Responsible();
  fieldsInStep: FieldInStep[] = [];

  public constructor(
    id: string,
    retrievedFromServer: boolean = false,
    stepName: string,
    topPx: number,
    leftPx: number) {
    super(id, retrievedFromServer, topPx, leftPx, stepName);

    this._visualState = new StepItemVisualState(this);
  }

  get visualState(): StepItemVisualState {
    return this._visualState;
  }
}
