function memoize(fn) {
  let obj = {};
  return function (...args) {
    let x = JSON.stringify(args); // Corrected line
    console.log("x", x);
    if (obj.hasOwnProperty(x)) return obj[x];
    let ans = fn(...args);
    obj[x] = ans;
    console.log(obj);
    return ans;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(0, 0); // 5
memoizedFn(0, 0); // 5
console.log(callCount); // 1