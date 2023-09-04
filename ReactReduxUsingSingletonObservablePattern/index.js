import "./styles.css";
import List from "./List";
import AppState from "./State";

const appState = new AppState();
const userList = new List();

appState.subscribe(userList);
const state = appState.get();
userList.render(state);

const userInput = document.getElementById("userInput");
const addUserBtn = document.getElementById("addUserBtn");

addUserBtn.addEventListener("click", () => {
  const value = userInput.value;
  console.log("value", value);
  appState.updateUserState(value);
});
