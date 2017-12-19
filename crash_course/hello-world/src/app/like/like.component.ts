import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  // 2 input: likesCount, isActive
  // these values are coming from app.component.ts
  // we bind them together in app.component.html
  // like this: [inputVariable] = "parentComponentVariable"
  // <app-like [likesCount]="tweet.likesCount" [isActive]="tweet.isLiked">
  // it's in the CHILD component that we manipulate the values from PARENT component.
  @Input() likesCount: number;
  @Input() isActive: boolean;

  onClick() {
    this.likesCount += this.isActive ? -1 : 1;
    this.isActive = !this.isActive;
  }
}
