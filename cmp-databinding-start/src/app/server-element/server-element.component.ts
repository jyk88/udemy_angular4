import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // parent component hosting element (i.e. app.component.html) now can
  // see the element, because it has the decorator @Input()
  // you can pass in alias in the decorator if you want to use a different name
  // in the parent component html.
  @Input() element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit() {
  }

}
