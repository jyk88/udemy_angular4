import { Component, Output, EventEmitter } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my coool Angular app';
  post = {
    title: 'postTitle',
    isFavorite: true
  };

  tweet = {
    body: 'here is the body of a tweet...',
    isLiked: false,
    likesCount: 10
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('fav changed to ' + eventArgs.newValue);
  }
}
