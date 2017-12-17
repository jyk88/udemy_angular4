"use strict";
// how to do enum!!!!!! omg
Object.defineProperty(exports, "__esModule", { value: true });
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Green;
var message;
message = 'abc';
// two ways of type assertions
// let endsWithC = (<string>message).endsWith('c');
// let differentway = (message as string).endsWith('c');
var point_1 = require("./point");
var likeButton_1 = require("./likeButton");
var point = new point_1.Point(1, 2);
point.draw();
var x = point.x;
point.x = 10;
var button = new likeButton_1.LikeButton(10, true);
button.onClick();
console.log("likes: " + button.likesCount + "... isSelected: " + button.isSelected);
