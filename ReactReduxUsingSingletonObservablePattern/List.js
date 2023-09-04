import Observer from "./observer";

class List extends Observer {
  render(state) {
    const userList = state.users;
    console.log("userList", userList);
    const userFragment = document.createDocumentFragment();
    userList.forEach((user) => {
      const child = document.createElement("div");
      child.classList.add("row");
      child.innerText = user.name;
      userFragment.appendChild(child);
    });
    const userListDomElement = document.getElementById("user-list-container");
    console.log("userListDomElement", userListDomElement);
    userListDomElement.append(userFragment);
  }

  update(state) {
    this.render(state);
  }
}

export default List;
