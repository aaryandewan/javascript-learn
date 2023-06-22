function memoize(fn) {
  let obj = {};
  console.log(JSON.stringify(arguments));
  return function (...args) {
    let x = JSON.stringify(...arguments);
    if (obj[x]) return obj[x];
    let ans = fn(...args);
    obj.x = ans;
    return ans;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1
