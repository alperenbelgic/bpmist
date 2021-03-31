import { Group } from './Group';
import { ResponsibleVisualState } from './ResponsibleVisualState';
import { User } from './User';
import { GroupAssignOption } from './GroupAssignOption';
import { Field } from '../Field/Field';
import { ResponsibleType } from './ResponsibleType';
import { ProcessStarterType, ProcessStarterTypeCode } from './ProcessStarterType';
import { ProcessStarterVisualState } from './ProcessStarterVisualState';

export class ProcessStarter {
  constructor(
    public processStarterType: ProcessStarterType,
    public groups: Group[] = []
  ) {

    this.visualState = new ProcessStarterVisualState(this);
  }

  visualState: ProcessStarterVisualState;
}


