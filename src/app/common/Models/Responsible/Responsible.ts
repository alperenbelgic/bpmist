import { Group } from './Group';
import { ResponsibleVisualState } from './ResponsibleVisualState';
import { User } from './User';
import { GroupAssignOption } from './GroupAssignOption';
import { Field } from '../Field/Field';

export class Responsible {
  constructor(
    public responsibleType: ResponsibleType = null,
    public group: Group = null,
    public groupAssignOption: GroupAssignOption = null,
    public user: User = null,
    public userField: Field = null) {

    this.visualState = new ResponsibleVisualState(this);

    if (this.responsibleType === null) {
      this.responsibleType = this.visualState.groupTypeName;
    }

  }

  visualState: ResponsibleVisualState;
}

export type ResponsibleType = 'group' | 'user' | 'groupFromField' | 'userFromField' | 'groupListFromField' | 'userListFromField';

