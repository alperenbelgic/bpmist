import { Field } from './Field';
import { Subscription, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

export class FieldInStep {

  constructor(
    public id: string,
    protected retrievedFromServer: boolean,
    public field: Field,
    private _readOnly: boolean,
    public isRequired: boolean) {
    this.field.fieldInStepList.subscribe(fieldInStepList => {
      this.subscribeFieldInStepList(fieldInStepList);
    });
  }

  otherFieldInStepsSubscripbtions: Subscription[] = [];

  subscribeFieldInStepList(fieldInStepList: FieldInStep[]) {

    this.otherFieldInStepsSubscripbtions.forEach(element => {
      element.unsubscribe();
    });

    this.otherFieldInStepsSubscripbtions = [];

    fieldInStepList.forEach(element => {

      var subscription = element.propertyChanged.pipe(filter(v => v.propertyName == nameof<FieldInStep>("readOnly"))).subscribe(v => {
        this.calculateEditableFieldUsedInAnotherStep();
      });

      this.otherFieldInStepsSubscripbtions.push(subscription);
    });

    this.calculateEditableFieldUsedInAnotherStep();
  }

  get readOnly() {
    return this._readOnly;
  }
  set readOnly(val: boolean) {
    this._readOnly = val;
    this.propertyChanged.next(new PC(nameof<FieldInStep>("readOnly"), val, this));
  }

  deleted = false;


  editableFieldUsedInAnotherStep = false;

  calculateEditableFieldUsedInAnotherStep() {
    this.editableFieldUsedInAnotherStep = this.field.fieldInStepList.value.some(f => f != this && f.readOnly == false && f.deleted == false);
  }

  propertyChanged = new Subject<PC>();

  visualState = {
    justDeleted: false // use this for showing, undo?

    // visual state icin tip olustur
    // yeni mi ekleniyor yoksa baska state'ten mi geliyor onu tut
    // bir takim field'lar degisince, eger baska state'ten eklendiyse, diger yerleri de etkiliyor ona gore diye uyar.
  };
}


export const nameof = <T>(name: keyof T) => name;

export class PC {
  constructor(
    public propertyName: string,
    public propertyValue: any,
    public sender: any
  ) { }
}
