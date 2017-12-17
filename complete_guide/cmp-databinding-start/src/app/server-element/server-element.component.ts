import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  SimpleChanges,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent
  implements OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChange called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('text content: ' + this.header.nativeElement.textContent);
    console.log(
      'contentParagraph: ' + this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log(
      'contentParagraph: ' + this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentChecked() {
    console.log('afterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('afterviewinit called');
    console.log('text content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('afterviewchecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
