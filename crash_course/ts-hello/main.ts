// how to do enum!!!!!! omg

enum Color {
  Red = 0,
  Green = 1,
  Blue = 2
}

let backgroundColor = Color.Green;

let message;
message = 'abc';
// two ways of type assertions
// let endsWithC = (<string>message).endsWith('c');
// let differentway = (message as string).endsWith('c');

import { Point } from './point';
import { LikeButton } from './likeButton';

let point = new Point(1, 2);
point.draw();
let x = point.x;
point.x = 10;

let button = new LikeButton(10, true);

button.onClick();
console.log(`likes: ${button.likesCount}... isSelected: ${button.isSelected}`);
