class Subject {
    constructor() {
      this.observers = [];
    }
  
    subscribe(observer) {
      this.observers.push(observer);
    }
  
    unsubscriber(observer) {
      this.observers = this.observers.filter((obs) => obs !== observer);
    }
  
    notify(data) {
      this.observers.forEach((observer) => observer.update(data));
    }
  }
  
  export default Subject;
  