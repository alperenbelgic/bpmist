import { Injectable } from '@angular/core';

export class FieldType {
  name: string;
  code: string;
}

export class Field {

  constructor(private _id: string) { }

  get id(): string {
    return this._id;
}
  name = '';
  fieldType: FieldType = null;
  isRequired = false;

  numericFieldSettings = {
    hasMinValueRestriction: false,
    minValue: null as number,
    hasMaxValueRestriction: false,
    maxValue: null as number
  };

  visualState = { settingsVisible: false };
}

@Injectable({
  providedIn: 'root'
})
export class FieldTypeService {

  constructor() { }

  async getFieldTypes(): Promise<FieldType[]> {
    return [
      { name: 'Text', code: 'text' },
      { name: 'Numeric', code: 'numeric' },
      { name: 'Date', code: 'date' },
      { name: 'Checkbox', code: 'checkbox' },
      { name: 'File', code: 'file' },

    ];
  }
}
