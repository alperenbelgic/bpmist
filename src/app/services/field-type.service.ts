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

  numericFieldSettings = {
    hasMinValueRestriction: false,
    minValue: null as number,
    hasMaxValueRestriction: false,
    maxValue: null as number
  };


}

export class FieldInStep {
  constructor(
    public id: string,
    protected retrievedFromServer: boolean,
    public field: Field,
    public readOnly: boolean,
    public isRequired: boolean) {
  }
  visualState = {
    // visual state icin tip olustur
    // yeni mi ekleniyor yoksa baska state'ten mi geliyor onu tut
    // bir takim field'lar degisince, eger baska state'ten eklendiyse, diger yerleri de etkiliyor ona gore diye uyar.
  };
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
