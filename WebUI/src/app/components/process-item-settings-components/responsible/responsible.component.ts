import { Component, OnInit, Input } from '@angular/core';
import { ResponsibleType } from 'src/app/common/Models/Responsible/ResponsibleType';
import { StepItem } from 'src/app/common/Models/ProcessItems/StepItem';
import { ProcessItem } from 'src/app/common/Models/ProcessItems/ProcessItem';
import { UserGroupService } from 'src/app/services/Business/userGroup.service';
import { Group } from 'src/app/common/Models/Responsible/Group';
import { User } from 'src/app/common/Models/Responsible/User';
import { GroupAssignOption } from 'src/app/common/Models/Responsible/GroupAssignOption';
import { Process } from 'src/app/common/Models/ProcessItems/Process';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-responsible',
  templateUrl: './responsible.component.html',
  styleUrls: ['./responsible.component.css']
})
export class ResponsibleComponent implements OnInit {

  @Input() process: Process;

  allResponsibleTypes: ResponsibleType[] = [];
  showingResponsibleTypes: ResponsibleType[] = [];
  _processItem: ProcessItem;

  groups: Group[] = [];
  users: User[] = [];
  selectedUserIds = [];


  private fieldChangeSubscription: Subscription;

  groupAssignOptions: GroupAssignOption[] = [];

  _selectedGroupIds = [];
  get selectedGroupIds() {
    return this._selectedGroupIds;
  }
  set selectedGroupIds(value: any[]) {
    console.log('value setter', value);
    this._selectedGroupIds = value;
    this.assignMultiselectValues(this.stepItem.responsible, 'groups', 'groupId', this.groups, value, null);
  }

  constructor(
    private userGroupService: UserGroupService
  ) { }

  async ngOnInit() {
    this.groups = await this.userGroupService.getGroups();
    this.users = await this.userGroupService.getUsers();
    this.groupAssignOptions = await this.userGroupService.getGroupAssignOptions();
    this.allResponsibleTypes = this.userGroupService.getResponsibleTypes();

    this.subscribeFieldChanges();

    this.initialise_Responsible_MultipleSelection_Variables();
    this.setShowingResponsibleTypes();
  }

  get stepItem(): StepItem {
    return this.processItem as StepItem;
  }

  get processItem(): ProcessItem {
    return this._processItem;
  }

  @Input() set processItem(value: ProcessItem) {

    if (this._processItem == value) {
      return;
    }

    this._processItem = value;

    // TODO: only if it is step item
    // TODO: explain why we make this call
    // TODO: are you handling null "value" here?
    this.initialise_Responsible_MultipleSelection_Variables();
    this.setShowingResponsibleTypes();
  }

  // TODO: move to a base component?
  assignMultiselectValues(
    parentObjectOfModel: any,
    fieldNameOfModel: string,
    idFieldNameInModel: string,
    selectableListOfItems: any[],
    selectedItemIds: any[],
    event: any
  ) {
    console.log(event)
    // TODO: handling a selected object which is not present in the list?
    const selectedItems = selectableListOfItems.filter(
      item =>
        selectedItemIds.some(selectedItemId =>
          selectedItemId === item[idFieldNameInModel]));

    parentObjectOfModel[fieldNameOfModel] = selectedItems;
  }

  initialise_Responsible_MultipleSelection_Variables() {
    this.selectedUserIds = (this.stepItem?.responsible?.users ?? []).map(u => u.userId);
    this.selectedGroupIds = (this.stepItem?.responsible?.groups ?? []).map(g => g.groupId);
  }

  setShowingResponsibleTypes(): void {

    this.showingResponsibleTypes =
      this.allResponsibleTypes.filter(rt => !rt.isAdvancedOption || this.stepItem?.responsible?.visualState?.showAdvancedOptions);
  }

  get showAdvancedResponsibleTypes(): boolean {
    return this.stepItem?.responsible?.visualState?.showAdvancedOptions;
  }

  set showAdvancedResponsibleTypes(value: boolean) {
    this.stepItem.responsible.visualState.showAdvancedOptions = value;
    this.setShowingResponsibleTypes();
  }


  subscribeFieldChanges() {
    this.updateEnabledResponsibleTypes();

    this.fieldChangeSubscription =
      this.process.fields.subscribe(fc => {
        // TODO: this should be centralized and not handled in component.
        this.updateEnabledResponsibleTypes();
      });
  }

  updateEnabledResponsibleTypes() {
    this.allResponsibleTypes.forEach(rt => {
      rt.visualState.enabled = true;

      const groupFieldSelectionWithNoGroupField =
        rt.code === 'groupFromField' &&
        this.process.groupTypeFields.length === 0;

      const userFieldSelectionWithNoUserField =
        rt.code === 'userFromField' &&
        this.process.userTypeFields.length === 0;

      const groupListSelectionWithNoRelevantField =
        rt.code === 'groupListFromField' &&
        this.process.multipleGroupTypeFields.length === 0;

      const userListWithSelectionNoRelevantField =
        rt.code === 'userListFromField' &&
        this.process.multipleUserTypeFields.length === 0;

      if (groupFieldSelectionWithNoGroupField ||
        userFieldSelectionWithNoUserField ||
        groupListSelectionWithNoRelevantField ||
        userListWithSelectionNoRelevantField) {
        rt.visualState.enabled = false;
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  unsubscribe() {
    this.fieldChangeSubscription?.unsubscribe();
  }

}
