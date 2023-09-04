export default class CurrentUser {
    constructor(name) {
      this._username = name;
    }
  
    set username(value) {
      this._username = value;
    }
  
    get username() {
      return this._username;
    }
  }
  