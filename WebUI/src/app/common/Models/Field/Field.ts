import { FieldType } from './FieldType';
import { FieldInStep } from './FieldInStep';
import { Observable, BehaviorSubject } from 'rxjs';

export class Field {

  fieldInStepList = new BehaviorSubject<FieldInStep[]>([]);

  // tslint:disable-next-line: variable-name
  constructor(private _id: string) {
    this.generalFieldSettings = new GeneralFieldSettings(this);
  }

  get id(): string {
    return this._id;
  }

  // tslint:disable-next-line: variable-name
  _name = '';
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
    this._fieldChanged$.next(this);
  }

  // tslint:disable-next-line: variable-name
  private _fieldType: FieldType = null;
  get fieldType(): FieldType {
    return this._fieldType;
  }
  set fieldType(value: FieldType) {
    this._fieldType = value;
    this._fieldChanged$.next(this);
  }

  // tslint:disable-next-line: variable-name
  private _fieldChanged$ = new BehaviorSubject<Field>(this);
  get fieldChanged$(): Observable<Field> {
    return this._fieldChanged$.asObservable();
  }

  generalFieldSettings: GeneralFieldSettings;

  numericFieldSettings = {
    hasMinValueRestriction: false,
    minValue: null as number,
    hasMaxValueRestriction: false,
    maxValue: null as number
  };

  textFieldSettings = {
    multiline: false,
    numberOfLines: 2,
    hasMinNumberOfChars: false,
    minNumberOfChars: null as number,
    hasMaxNumberOfChars: false,
    maxNumberOfChars: null as number,
    setRegexValidation: false,
    regex: null as string,

    visualState: {
      // validateAsEmail: false,
      // showAdvancedSettings: false
    }
  };

  triggerChange() {
    this._fieldChanged$.next(this);
  }

}
export class GeneralFieldSettings {
  constructor(private field: Field) {
  }

  _multiple: boolean;
  set multipleValue(value: boolean) {
    this._multiple = value;
    this.field.triggerChange();
  }
  get multipleValue(): boolean {
    return this._multiple;
  }
}
