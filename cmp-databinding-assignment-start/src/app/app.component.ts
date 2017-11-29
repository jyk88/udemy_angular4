import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrayOfEvens = [];
  arrayOfOdds = [];

  onCurrentInterval(currentInterval: number) {
    currentInterval % 2 === 0
      ? this.arrayOfEvens.push(currentInterval)
      : this.arrayOfOdds.push(currentInterval);
  }
}
