import { Injectable } from '@angular/core';
import { FieldType } from '../common/Models/Field/FieldType';
import { Group } from '../common/Models/Responsible/Group';
import { User } from '../common/Models/Responsible/User';
import { GroupAssignOption } from '../common/Models/Responsible/GroupAssignOption';

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
      new User('Baris Belgic', '9c44bz'),
      new User('Alperen Belgic', '9c44bz'),
      new User('Kemalettin Tugcu', '9c44bz'),
      new User('Fazil Husnu Daglarca', '9c44bz'),
      new User('Tacsiz Kral Pele', '9c44bz'),
      new User('Ringo Siseler', '9c44bz'),
      new User('a', '9c44bz'),
      new User('b', '9c44bz'),
      new User('c', '9c44bz'),
      new User('d', '9c44bz'),
      new User('e', '9c44bz'),
      new User('f', '9c44bz'),
      new User('ag', '9c44bz'),
      new User('bg', '9c44bz'),
      new User('cg', '9c44bz'),
      new User('dg', '9c44bz'),
      new User('eg', '9c44bz'),
      new User('fg', '9c44bz'),
      new User('gSg', '9c44bz'),
    ];
  }


  async getGroupAssignOptions(): Promise<GroupAssignOption[]> {
    return [

      new GroupAssignOption(
        'PulledManually',
        'The step will be in the pool of the group. A member of the group will manually pull it.',
        'When this step is reached, the step will be available to any member to pull and work'),

      new GroupAssignOption(
        'AssignRandomly',
        'The step will be assigned automatically to a member of the group.',
        'When this step is reached, the system will assign this step to a random member automatically'),

    ];
  }
}

