function memoize(fn) {
  let obj = {};
  return function(...args) {
      if(args.length == 2){
          let x = (toString(args[0]) + toString(args[1]));
          if(obj.hasOwnProperty(x)) return obj.x;
          else{
              let ans = fn(...args);
              obj.x = ans;
              return ans;
          }   
      }
      else{
          let x = toString(args[0]);
          if(obj.hasOwnProperty(x)) return obj.x;
          else{
              let ans = fn(...args);
              obj.x = ans;
              return ans;
          }
      }
  }
}


 let callCount = 0;
 const memoizedFn = memoize(function (a, b) {
	 callCount += 1;
   return a + b;
 })
 memoizedFn(2, 3) // 5
 memoizedFn(2, 3) // 5
 console.log(callCount) // 1 
 