import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
// don't do this in the @Component above
// inputs: ['isFavorite']
// styleUrls / styles: whatever gets applied last will be what gets applied finally.

// shadow dom : scoped styles (no style bleeding)
export class FavoriteComponent {
  // isFavorite is now exposed to the outside
  // look at app.component.html...
  /*
  <app-favorite [isSelected]="post.isFavorite"....></app-favorite>
  isSelected is drawing from the value of post.isFavorite in app.component.ts
  */
  @Input() isSelected = true;

  // change is now an event
  // look at app.component.html...
  // <app-favorite....(change)="onFavoriteChanged()"></app-favorite>
  // onFavoriteChanged() is a function in app.component.ts that just console logs for now...
  @Output() change = new EventEmitter();
  inputText = 'the revenge of the and nerds';

  onStarClicked() {
    this.isSelected = !this.isSelected;
    // event has to be emitted in order for it to be visible on the parent component/template
    this.change.emit({ newValue: this.isSelected });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
