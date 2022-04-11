import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightQoute]',
})
export class HighlightQouteDirective {
  @Input()
  hasHighestUpvotes = false;

  constructor(private el: ElementRef) {}

  private highlight() {
    if (this.hasHighestUpvotes) {
        this.el.nativeElement.style.backgroundColor = 'green';
    } else {
        this.el.nativeElement.style.backgroundColor = '';
    }
  }
}
