import { ProcessItem } from './ProcessItem';
import { Link } from './Link';
import { Field } from '../Field/Field';
import { StepItem } from './StepItem';
import { RandomIdGenerator } from '../../../services/Business/general.service';
import { FieldInStep } from '../Field/FieldInStep';
import { UserGroupService } from '../../../services/Business/userGroup.service';
import { from, Observable, BehaviorSubject, Subscription } from 'rxjs';
import { ArrayChanged, ObservableArray } from '../PropertyChangedTypes';
import { ProcessStarter } from '../Responsible/ProcessStarter';

export class Process {

  constructor(
    private randomIdGenerator: RandomIdGenerator,
    private userGroupService: UserGroupService,
  ) {

    this.processStarter = new ProcessStarter(
      this.userGroupService.getDefaultProcessStarter(), []);

    this.fields.subscribe(change => {
      this.setAllUserTypeFields(change);
    });
  }

  processId: string;

  processItems = new ObservableArray<ProcessItem>(this);

  processStarter: ProcessStarter;

  links: Link[] = [];

  public fields = new ObservableArray<Field>(this);
  userTypeFields: Field[] = [];
  groupTypeFields: Field[] = [];
  multipleUserTypeFields: Field[] = [];
  multipleGroupTypeFields: Field[] = [];

  addNewField(stepItem: StepItem) {

    const field = new Field(this.randomIdGenerator.generate());

    this.fields.addItem(field);

    const fieldInStep = new FieldInStep(
      this.randomIdGenerator.generate(),
      false,
      field,
      false,
      false);

    field.fieldInStepList.next([...field.fieldInStepList.value, fieldInStep]);

    stepItem.fieldsInStep.push(fieldInStep);

    return { createdFieldInStep: fieldInStep };
  }

  addNewStepField(stepItem: StepItem, field: Field) {
    // TODO: work on scenarios
    // initializing with values from server and
    // creating values from ui
    // creating a fresh process

  }

  addNewStep(stepName: string, topPx: number, leftPx: number, isFirstItem: boolean = false) {
    const newStep = new StepItem(
      this.randomIdGenerator.generate(),
      true,
      false,
      stepName,
      topPx,
      leftPx,
      this.userGroupService.getDefaultResponsibleType(),
      this.userGroupService.getDefaultGroupAssignOption(),
    );

    newStep.isFirstItem = isFirstItem;

    this.processItems.addItem(newStep);
  }

  deleteField(field: Field) {
    // TODO: check if the field is a user field or group field picked as the responsible in a step
    // TODO: call value changed
    //((field as any).processSubscription as Subscription).unsubscribe();

    // stop deletion or ask if they want to remove that field being selected
  }

  private setAllUserTypeFields(change: ArrayChanged<Field>) {

    const fieldAddedOrRemovedWithUserOrGroupFieldType =
      (change.changeMode == 'added' || change.changeMode == 'removed') &&
      (change.changedValue.fieldType?.code == 'user' || change.changedValue.fieldType?.code == 'group');

    const fieldFieldTypeOrGeneralFieldSettingsChanged =
      change.changeMode == 'itemPropertyChanged' &&
      (change.itemPropertyChanged.propertyName == 'fieldType' || change.itemPropertyChanged.propertyName == 'generalFieldSettings');

    if (!fieldAddedOrRemovedWithUserOrGroupFieldType && !fieldFieldTypeOrGeneralFieldSettingsChanged) {
      return;
    }

    const fields = this.fields.getArray();

    this.userTypeFields =
      fields.filter(field => field.fieldType?.code === 'user' && !field.generalFieldSettings.multipleValue);

    this.multipleUserTypeFields =
      fields.filter(field => field.fieldType?.code === 'user' && field.generalFieldSettings.multipleValue);

    this.groupTypeFields =
      fields.filter(field => field.fieldType?.code === 'group' && !field.generalFieldSettings.multipleValue);

    this.multipleGroupTypeFields =
      fields.filter(field => field.fieldType?.code === 'group' && field.generalFieldSettings.multipleValue);
  }



}
