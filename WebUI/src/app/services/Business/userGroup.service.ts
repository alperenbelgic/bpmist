import { Injectable } from '@angular/core';
import { FieldType } from '../../common/Models/Field/FieldType';
import { Group } from '../../common/Models/Responsible/Group';
import { User } from '../../common/Models/Responsible/User';
import { GroupAssignOption } from '../../common/Models/Responsible/GroupAssignOption';
import { ResponsibleType } from '../../common/Models/Responsible/ResponsibleType';

@Injectable({
  providedIn: 'root'
})
export class UserGroupService {

  constructor() { }

  async getGroups(): Promise<Group[]> {
    return [
      new Group('Finance', 'F9zVhZ'),
      new Group('Accounting', '9JtbS9'),
      new Group('Sales', 'OABlv4'),
      new Group('Product Development 1', 'nYaVF8'),
      new Group('Product Development 2', 'wcYC3s'),
    ];
  }

  async getUsers(): Promise<User[]> {
    return [
      new User('Omer Kucuk', '9c44bz'),
      new User('Baris Belgic', 'a'),
      new User('Alperen Belgic', 'b'),
      new User('Kemalettin Tugcu', 'c'),
      new User('Fazil Husnu Daglarca', 'd'),
      new User('Tacsiz Kral Pele', 'e'),
      new User('Ringo Siseler', 'f'),
      new User('a', 'g'),
      new User('b', '3'),
      new User('c', '4'),
      new User('d', '6'),
      new User('e', '5'),
      new User('f', '8'),
      new User('ag', '7'),
      new User('bg', '9'),
      new User('cg', 'aaa'),
      new User('dg', 'sss'),
      new User('eg', 'ddd'),
      new User('fg', '9c44bz1'),
      new User('gSg', '9c44b11z'),
    ];
  }


  getGroupAssignOptions(): GroupAssignOption[] {
    return [

      new GroupAssignOption(
        'AssignRandomly',
        'The step will automatically be assigned to a member.',
        'When this step is reached, the system will assign this step to a random member automatically'),

      new GroupAssignOption(
        'PulledManually',
        'A member of the group will manually pull the step.',
        'When this step is reached, the step will be available to any member to pull and work'),

    ];

  }

  getDefaultGroupAssignOption(): GroupAssignOption {

    return this.getGroupAssignOptions().find(gao => gao.optionCode === 'AssignRandomly');

  }

  getResponsibleTypes(): ResponsibleType[] {
    return [
      {
        code: 'group',
        name: 'Assign to a group',
        tooltip: 'This step will be assigned to a user from the group you select.',
        isAdvancedOption: false,
        visualState: { enabled: true },
      },
      {
        code: 'user',
        name: 'Assign to a specific user',
        tooltip: 'The step will be assigned to the user you select.',
        isAdvancedOption: false,
        visualState: { enabled: true },
      },
      {
        code: 'manager',
        name: 'Assign to the manager',
        tooltip: 'This step will be assigned to the manager of the previous action user.',
        isAdvancedOption: false,
        visualState: { enabled: true },
      },
      {
        code: 'groupList',
        name: 'Assign to multiple groups parallelly',
        tooltip: 'Multiple steps will be assigned to groups you select.',
        isAdvancedOption: true,
        visualState: { enabled: true },
      },
      {
        code: 'userList',
        name: 'Assign to multiple users parallelly',
        tooltip: 'Multiple steps will be assigned users you select.',
        isAdvancedOption: true,
        visualState: { enabled: true },
      },
      {
        code: 'userFromField',
        name: 'Assign to the user selected in a user field',
        tooltip: 'The step will be assigned to the user selected in a field from a previous step.',
        isAdvancedOption: true,
        visualState: { enabled: true },
      },
      {
        code: 'groupFromField',
        name: 'Assign to the group selected in a group field',
        tooltip: 'The step will be assigned to the group who is selected in a field from a previous step.',
        isAdvancedOption: true,
        visualState: { enabled: true },
      },
      {
        code: 'userListFromField',
        name: 'Assign to multiple users selected in a multiple selection user field',
        tooltip: 'Multiple steps will be assigned parallelly to users selected in a multi selection user field from a previous step.',
        isAdvancedOption: true,
        visualState: { enabled: true },
      },
      {
        code: 'groupListFromField',
        name: 'Assign to multiple groups selected in a multiple selection group field',
        tooltip: 'Multiple steps will be assigned parallelly to groups selected in a multi selection group field from a previous step.',
        isAdvancedOption: true,
        visualState: { enabled: true },
      },

    ];
  }

  getDefaultResponsibleType(): ResponsibleType {
    return this.getResponsibleTypes()[0];
  }
}

