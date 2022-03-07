function partial(addFn, initialInput) {
    return (...args) => {
      return addFn(...initialInput, ...args);
    };
  }
  
  function add(a, b, c) {
    return a + b + c;
  }
  let partialAdd = partial(add, [1, 2]);
  
  console.log(partialAdd(3)); // 6
  partialAdd(2); // 5 