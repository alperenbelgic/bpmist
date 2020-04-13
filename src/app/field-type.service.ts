import { Injectable } from '@angular/core';

export class FieldType {
  name: string;
  code: string;
}

export class Field {
  name: string;
  fieldType: FieldType;
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
    ];
  }
}
