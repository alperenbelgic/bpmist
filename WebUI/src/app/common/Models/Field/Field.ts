import { FieldType } from './FieldType';
import { FieldInStep } from './FieldInStep';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { IPropertyChanged, PC } from '../PropertyChangedTypes';

export class Field implements IPropertyChanged<Field>{

  fieldInStepList = new BehaviorSubject<FieldInStep[]>([]);

  // tslint:disable-next-line: variable-name
  constructor(private _id: string) {
    this.generalFieldSettings = new GeneralFieldSettings(this);
  }
  propertyChanged: Subject<PC<Field>>;

  get id(): string {
    return this._id;
  }

  // tslint:disable-next-line: variable-name
  _name = '';
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    const oldValue = this._name;
    this._name = value;
    this.propertyChanged.next(new PC('name', value, oldValue, this));
  }

  // tslint:disable-next-line: variable-name
  private _fieldType: FieldType = null;
  get fieldType(): FieldType {
    return this._fieldType;
  }
  set fieldType(value: FieldType) {
    const oldValue = this._fieldType;
    this._fieldType = value;
    this.propertyChanged.next(new PC('fieldType', value, oldValue, this));
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

}
export class GeneralFieldSettings {
  constructor(private field: Field) {
  }

  _multiple: boolean;
  set multipleValue(value: boolean) {
    const oldValue = this._multiple;
    this._multiple = value;
    // TODO this usage may not be ideal. no final model yet, for hierarcial data structures.
    this.field.propertyChanged.next(new PC('generalFieldSettings', value, oldValue, this.field));
  }
  get multipleValue(): boolean {
    return this._multiple;
  }
}
