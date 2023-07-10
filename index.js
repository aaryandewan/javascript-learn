class Complex {
  constructor(real, imaginary) {
    this.r = real;
    this.i = imaginary;
  }
  plus(that) {
    return new Complex(this.r + that.r, this.i + that.i);
  }

  static sum(c, d) {
    return c.plus(d);
  }
  get real() {
    return this.r;
  }
  get imaginary() {
    return this.i;
  }
}

let one = new Complex(0, 1);
let two = new Complex(1, 0);

let three = Complex.sum(one, two);
console.log(three.imaginary);
