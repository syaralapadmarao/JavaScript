import Subject from "./Subject";

class State extends Subject {
  constructor() {
    super();
    this.state = {
      users: [
        {
          id: 1,
          name: "Jennifer"
        },
        {
          id: 2,
          name: "Jane"
        },
        {
          id: 3,
          name: "John"
        }
      ]
    };
  }

  updateUserState(data) {
    const userState = this.state.users;
    const lastId = userState[userState.length - 1].id;
    const nextId = lastId + 1;
    console.log("before update state =", this.state);
    this.state.users = [...userState, { id: nextId, name: data }];
    console.log("after update state =", this.state);
    this.notify(this.state); // notify the observers
  }

  get() {
    return this.state;
  }
}

export default State;
