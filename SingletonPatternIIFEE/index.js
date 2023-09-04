import CurrentUserSingleton from "./CurrentUserSingleton";

const currentUser = CurrentUserSingleton.getInstance();
// console.log(currentUser);

currentUser.username = "Alice";
// console.log(currentUser.username);

const anotherCurrentUser = CurrentUserSingleton.getInstance();
// console.log(anotherCurrentUser.username);
anotherCurrentUser.username = "Jim";
console.log(anotherCurrentUser.username);
console.log(currentUser.username);
