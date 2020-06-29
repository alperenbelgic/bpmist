import { Group } from './Group';
import { ResponsibleVisualState } from './ResponsibleVisualState';
import { User } from './User';
import { GroupAssignOption } from './GroupAssignOption';
import { Field } from '../Field/Field';
import { ResponsibleType } from './ResponsibleType';

export class Responsible {
  constructor(
    public responsibleType: ResponsibleType,
    public group: Group = null,
    public groupAssignOption: GroupAssignOption = null,
    public user: User = null,
    public groups: Group[] = [],
    public users: User[] = [],
    public groupField: Field = null,
    public userField: Field = null,
    public groupFieldList: Field[] = [],
    public userFieldList: Field[] = [],
  ) {

    this.visualState = new ResponsibleVisualState(this);
  }

  visualState: ResponsibleVisualState;
}


