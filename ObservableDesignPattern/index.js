import Observable from './Observerable';

// Instantiating new Observer class
const observable = new Observable();

// Getting references to DOM elements
const inputText = document.getElementById("inputText");
const subcriber1 = document.getElementById("Subscribe1");
const subcriber2 = document.getElementById("Subscribe2");
const unsubcriber1 = document.getElementById("UnSubscribe1");
const unsubcriber2 = document.getElementById("UnSubscribe2");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
// Defining actions to add to observers array
const p1Update = function(text) {
  p1.textContent = text;
}
const p2Update = function(text) {
  p2.textContent = text;
}

//handlers for b
 const handleSubscriber1 = () => {
  observable.subscribe(p1Update);
}

const handleSubscriber2 = () => {
    observable.subscribe(p2Update);
}
const handleUnSubscriber1 = () => {
  observable.unsubscribe(p1Update);
}
const handleUnSubscriber2 = () => {
  observable.unsubscribe(p2Update);
}


  subcriber1.addEventListener("click", handleSubscriber1)
  subcriber2.addEventListener("click", handleSubscriber2)
  unsubcriber1.addEventListener("click", handleUnSubscriber1)
  unsubcriber2.addEventListener("click", handleUnSubscriber2)
  inputText.addEventListener("keyup", (e) => {
    observable.notify(e.target.value);
  });

 