import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent {
  title = 'list of courses';
  courses;
  imageUrl = 'http://lorempixel.com/400/200/';
  colSpan = 2;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
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
