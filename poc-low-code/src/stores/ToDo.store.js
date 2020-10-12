import { decorate, observable } from "mobx";

class ToDoStore {
  constructor() {
    let username = null;
    let password = null;
    let userAccessToken = null;
    let user = null;
  }

  setObject(key, value) {
    console.log('setObject')
    if (!this.objects) {
      this.objects = {}
    }
    this.objects[key] = value
  }

  getObject(key) {
    if (this.objects) {
      return this.objects[key]
    }
    return null
  }
}

decorate(ToDoStore, {
  username: observable,
  password: observable,
  userAccessToken: observable,
  user: observable
});

export default new ToDoStore();
