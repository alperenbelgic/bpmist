import { ProcessItem } from './ProcessItem';
import { Link } from './Link';
import { Field } from '../Field/Field';
import { StepItem } from './StepItem';
import { RandomIdGenerator } from 'src/app/services/general.service';
import { FieldInStep } from '../Field/FieldInStep';
import { UserGroupService } from 'src/app/services/userGroup.service';
import { from, Observable, BehaviorSubject, Subscription } from 'rxjs';

export class Process {

  constructor(
    private randomIdGenerator: RandomIdGenerator,
    private userGroupService: UserGroupService,
  ) {
    this.fields$.subscribe(fields => {
      this.setAllUserTypeFields();
    });
  }

  processId: string;

  processItems: ProcessItem[] = [];
  links: Link[] = [];

  // tslint:disable-next-line: variable-name
  private _fields: Field[] = [];
  private fields$: BehaviorSubject<Field[]> = new BehaviorSubject<Field[]>([]);
  public get fieldsChange$(): Observable<Field[]> {
    return this.fields$.asObservable();
  }
  userTypeFields: Field[] = [];
  groupTypeFields: Field[] = [];
  multipleUserTypeFields: Field[] = [];
  multipleGroupTypeFields: Field[] = [];

  addNewField(stepItem: StepItem) {

    const field = new Field(this.randomIdGenerator.generate());

    (field as any).processSubscription =
      field.fieldChanged$.subscribe(_ => {
        this.fields$.next(this._fields);
      });

    this._fields.push(field);
    this.fields$.next(this._fields);

    const fieldInStep = new FieldInStep(
      this.randomIdGenerator.generate(),
      false,
      field,
      false,
      false);

    stepItem.fieldsInStep.push(fieldInStep);

    return { createdFieldInStep: fieldInStep };
  }

  addNewStep(stepName: string, topPx: number, leftPx: number) {
    this.processItems.push(
      new StepItem(
        this.randomIdGenerator.generate(),
        false,
        stepName,
        topPx,
        leftPx,
        this.userGroupService.getDefaultResponsibleType(),
        this.userGroupService.getDefaultGroupAssignOption(),
      ));
  }

  deleteField(field: Field) {
    // TODO: check if the field is a user field or group field picked as the responsible in a step
    // TODO: call value changed
    ((field as any).processSubscription as Subscription).unsubscribe();

    // stop deletion or ask if they want to remove that field being selected
  }

  private setAllUserTypeFields() {
    console.log(this._fields);
    this.userTypeFields =
      this._fields.filter(field => field.fieldType?.code === 'user' && !field.generalFieldSettings.multipleValue);

    this.multipleUserTypeFields =
      this._fields.filter(field => field.fieldType?.code === 'user' && field.generalFieldSettings.multipleValue);

    this.groupTypeFields =
      this._fields.filter(field => field.fieldType?.code === 'group' && !field.generalFieldSettings.multipleValue);

    this.multipleGroupTypeFields =
      this._fields.filter(field => field.fieldType?.code === 'group' && field.generalFieldSettings.multipleValue);
  }
}
