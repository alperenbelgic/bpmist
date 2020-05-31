import { FieldType } from './FieldType';

export class Field {

  // tslint:disable-next-line: variable-name
  constructor(private _id: string) { }

  get id(): string {
    return this._id;
  }
  name = '';
  fieldType: FieldType = null;

  numericFieldSettings = {
    hasMinValueRestriction: false,
    minValue: null as number,
    hasMaxValueRestriction: false,
    maxValue: null as number
  };

  textFieldSettings = {
    multiline: false,
    numberOfLine: 2,
    hasMinNumberOfChars: false,
    minNumberOfChars: null as number,
    hasMaxNumberOfChars: false,
    maxNumberOfChars: null as number,
    setRegexValidation: false,
    regex: null as string,

    visualState: {
      validateAsEmail: false,
      showAdvancedSettings: false
    }
  };
}
