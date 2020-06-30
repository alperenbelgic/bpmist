import { Responsible } from './Responsible';
import { ResponsibleTypeCode } from './ResponsibleType';

export class ResponsibleVisualState {
  constructor(private responsible: Responsible) { }

  get isTypeGroup(): boolean {
    return this.responsible?.responsibleType?.code === this.groupTypeName;
  }

  get isTypeUser(): boolean {
    return this.responsible?.responsibleType?.code === this.userTypeName;
  }

  get isTypeGroupList(): boolean {
    return this.responsible?.responsibleType?.code === this.groupListTypeName;
  }

  get isTypeUserList(): boolean {
    return this.responsible?.responsibleType?.code === this.userListTypeName;
  }

  get isTypeGroupFromField(): boolean {
    return this.responsible?.responsibleType?.code === this.groupFromFieldTypeName;
  }

  get isTypeUserFromField(): boolean {
    return this.responsible?.responsibleType?.code === this.userFromFieldTypeName;
  }

  get isTypeGroupListFromField(): boolean {
    return this.responsible?.responsibleType?.code === this.groupListFromFieldTypeName;
  }

  get isTypeUserListFromField(): boolean {
    return this.responsible.responsibleType?.code === this.userListFromFieldTypeName;
  }

  get show_ShowHideAdvancedOptions(): boolean {
    return this.isTypeGroup || this.isTypeUser;
  }

  get showGroupAssignOptions(): boolean {

    if (this.isTypeGroup && this.responsible.group != null) {
      return true;
    }

    if (this.isTypeGroupList && this.responsible.groups.length > 0) {
      return true;
    }

    if (this.isTypeGroupFromField && this.responsible.groupField != null) {
      return true;
    }

    if (this.isTypeGroupListFromField && this.responsible.groupFieldList.length > 0) {
      return true;
    }

    return false;

  }

  showAdvancedOptions = false;

  readonly groupTypeName: ResponsibleTypeCode = 'group';
  readonly userTypeName: ResponsibleTypeCode = 'user';
  readonly groupListTypeName: ResponsibleTypeCode = 'groupList';
  readonly userListTypeName: ResponsibleTypeCode = 'userList';
  readonly groupFromFieldTypeName: ResponsibleTypeCode = 'groupFromField';
  readonly userFromFieldTypeName: ResponsibleTypeCode = 'userFromField';
  readonly groupListFromFieldTypeName: ResponsibleTypeCode = 'groupListFromField';
  readonly userListFromFieldTypeName: ResponsibleTypeCode = 'userListFromField';
}
