import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  starClicked = true;
  inputText = 'the revenge of the and nerds';
  constructor() {}

  ngOnInit() {}

  onStarClicked() {
    this.starClicked = !this.starClicked;
  }
}
