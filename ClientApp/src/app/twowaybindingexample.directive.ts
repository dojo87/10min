import {
  Directive,
  ElementRef,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

@Directive({
  selector: '[appTwoWayBindingExample]'
})
export class TwoWayBindingExampleDirective {
  private text: string;

  @Output() appTwoWayBindingExampleChange = new EventEmitter<string>();

  @Input('appTwoWayBindingExample')
  get textValue(): string {
    return this.text;
  }

  set textValue(value: string) {
    this.text = value;
    this.appTwoWayBindingExampleChange.emit(value);
    this.el.nativeElement.innerText = value;
  }

  constructor(private el: ElementRef) {
    el.nativeElement.onclick = event => {
      this.textValue = 'CLICKED';
    };
  }
}
