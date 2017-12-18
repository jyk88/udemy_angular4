import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent {
  title = 'list of courses';
  courses;
  imageUrl = 'http://via.placeholder.com/400x200';
  colSpan = 2;
  isActive = true;
  email = 'me@example.com';
  course = {
    title: 'THE complete angular course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };

  text = 'Lorem ipsum dolor amet wolf mumblecore stumptown street art.';
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }

  onSave($event) {
    $event.stopPropagation();
    console.log('button was clicked!', $event);
  }

  onDivClicked() {
    console.log('the div was clcked');
  }

  onKeyUp() {
    console.log(this.email);
  }

  /*
    interpolation: {{ someAttribute }}
    property binding: eg. <img [src] = "someAttribute" />

    when to use one or the other?
    interpoation: strings
    prop bining: everything else
    remember prpp binding is ONE WAY!
  */
}
