import { ProcessStarter } from './ProcessStarter';
import { ProcessStarterTypeCode } from './ProcessStarterType';

export class ProcessStarterVisualState {
  constructor(private processStarter: ProcessStarter) { }

  get isTypeGroupList(): boolean {
    return this.processStarter?.processStarterType?.code == this.groupListTypeName;
  }

  get showGroupAssignOptions(): boolean {
    if (this.isTypeGroupList && this.processStarter.groups.length > 0) {
      return true;
    }

    return false;

  }

  showAdvancedOptions = false;

  readonly groupListTypeName: ProcessStarterTypeCode = 'groupList';
}
