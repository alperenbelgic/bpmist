import { Field } from './Field';

export class FieldInStep {
  constructor(
    public id: string,
    protected retrievedFromServer: boolean,
    public field: Field,
    public readOnly: boolean,
    public isRequired: boolean) {
  }

  deleted = false;

  visualState = {
    justDeleted: false // use this for showing, undo?

    // visual state icin tip olustur
    // yeni mi ekleniyor yoksa baska state'ten mi geliyor onu tut
    // bir takim field'lar degisince, eger baska state'ten eklendiyse, diger yerleri de etkiliyor ona gore diye uyar.
  };
}
