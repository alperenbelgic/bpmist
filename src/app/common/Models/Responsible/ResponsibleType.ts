// tslint:disable-next-line: max-line-length
export type ResponsibleTypeCode = 'group' | 'user' | 'groupList' | 'userList' | 'groupFromField' | 'userFromField' | 'groupListFromField' | 'userListFromField';


export class ResponsibleType {
  constructor(
    public readonly code: ResponsibleTypeCode,
    public readonly name: string,
    public readonly tooltip: string,
    public readonly isAdvancedOption) {
  }

  visualState = {
    enabled: true
  };
}
