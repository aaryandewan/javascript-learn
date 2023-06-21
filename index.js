var once = function (fn) {
  var flag = 0;
  return function (...args) {
    flag++;
    if (flag == 1) {
      console.log('z');
      return fn(...args);
    }
    return undefined;
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);
console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(1, 2, 3)); // 6
