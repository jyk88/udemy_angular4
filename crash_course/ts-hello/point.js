"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    // access modifiers: public, private, protected
    // fields and methods are public by default
    // if you set to private it can only be edited inside the method
    // we can't have multiple constructors!!!
    // keep optional if you want
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('x: ' + this._x + ' and y is ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        // getter and setter syntax
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('value cannot be less than 0');
            }
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
