import { Responsible, ResponsibleType } from './Responsible';

export class ResponsibleVisualState {
  constructor(private responsible: Responsible) { }

  get isTypeGroup(): boolean {
    return this.responsible.responsibleType === this.groupTypeName;
  }

  get isTypeUser(): boolean {
    return this.responsible.responsibleType === this.userTypeName;
  }

  get isTypeGroupFromField(): boolean {
    return this.responsible.responsibleType === this.groupFromFieldTypeName;
  }

  get isTypeUserFromField(): boolean {
    return this.responsible.responsibleType === this.userFromFieldTypeName;
  }

  get isTypeGroupListFromField(): boolean {
    return this.responsible.responsibleType === this.groupListFromFieldTypeName;
  }

  get isTypeUserListFromField(): boolean {
    return this.responsible.responsibleType === this.userListFromFieldTypeName;
  }



  readonly groupTypeName: ResponsibleType = 'group';
  readonly userTypeName: ResponsibleType = 'user';
  readonly groupFromFieldTypeName: ResponsibleType = 'groupFromField';
  readonly userFromFieldTypeName: ResponsibleType = 'userFromField';
  readonly groupListFromFieldTypeName: ResponsibleType = 'groupListFromField';
  readonly userListFromFieldTypeName: ResponsibleType = 'userListFromField';
}
