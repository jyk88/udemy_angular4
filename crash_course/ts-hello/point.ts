export class Point {
  // access modifiers: public, private, protected
  // fields and methods are public by default
  // if you set to private it can only be edited inside the method

  // we can't have multiple constructors!!!
  // keep optional if you want
  constructor(private _x?: number, private _y?: number) {}

  draw() {
    console.log('x: ' + this._x + ' and y is ' + this._y);
  }

  // getter and setter syntax
  get x() {
    return this._x;
  }

  set x(value) {
    if (value < 0) {
      throw new Error('value cannot be less than 0');
    }
    this._x = value;
  }
}

