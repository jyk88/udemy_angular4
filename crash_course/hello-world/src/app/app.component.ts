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

  courses;

  viewMode = 'dsf';

  canSave = true;

  task = {
    title: 'review applications',
    assignee: {
      name: 'john smith'
    }
  };
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('fav changed to ' + eventArgs.newValue);
  }

  onAdd() {
    this.courses.push({
      id: 4,
      name: 'course4'
    });
  }

  onChange(course: { id: number; name: string }) {
    course.name = 'updated';
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' }
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
