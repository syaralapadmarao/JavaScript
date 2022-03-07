
function sum(a, b, c, d) {
    return a + b + c + d; 
   }
   
   
function curry(addFn) {
   
   let addArgsLength = addFn.length;

   let returnFn = (...args) => {
   
       if(args.length === addArgsLength ) { 
       return addFn(...args)   
     } else { 
       return (...newArgs) => returnFn(...args.concat(newArgs));
     }   
   }
    return returnFn;

   }

   
   const curriedSum = curry(sum);
 
   console.log(curriedSum(1)(2)(3)(4))	 // 10
   
   console.log(curriedSum(1,2)(3)(4)) 	 // 10
   
   console.log(curriedSum(1,2)(3,4))	 // 10