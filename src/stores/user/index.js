import { observable, action, computed } from 'mobx';
import { wsAPI } from 'utils/wsapi';

export class UserStore {
  @observable id;
  @observable name;
  @observable avatar;
  @observable role;
  @observable banned;

  constructor() {
    this.reset();

    wsAPI.on('userRoleChanged', roleName => {
      this.role = roleName;
    });
  }

  reset() {
    this.id = null;
    this.name = null;
    this.avatar = null;
    this.role = 'guest';
    this.banned = false;
  }
}

export const userStore = new UserStore();