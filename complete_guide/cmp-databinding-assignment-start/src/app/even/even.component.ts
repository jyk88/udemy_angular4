import {
  Component,
  OnInit,
  Input,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() element: number;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {}

  ngOnInit() {}
}
