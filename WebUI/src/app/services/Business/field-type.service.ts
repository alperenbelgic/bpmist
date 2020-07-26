import { Injectable } from '@angular/core';
import { FieldType } from '../../common/Models/Field/FieldType';

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
      { name: 'User', code: 'user' },
      { name: 'Group', code: 'group' },

    ];
  }
}
