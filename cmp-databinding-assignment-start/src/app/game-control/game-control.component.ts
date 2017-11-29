import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() currentInterval = new EventEmitter<number>();
  interval;
  currentNumber = 0;
  constructor() {}

  ngOnInit() {}

  onStartGame() {
    this.interval = setInterval(() => {
      this.currentInterval.emit(this.currentNumber);
      this.currentNumber++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
    this.currentNumber = 0;
  }
}
