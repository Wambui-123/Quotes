import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightQoute]',
})
export class HighlightQouteDirective implements OnInit, OnChanges {
  @Input()
  hasHighestUpvotes = false;

  constructor(private el: ElementRef) {
  }

  private highlight() {
    this.el.nativeElement.style.backgroundColor = 'green';

    if (this.hasHighestUpvotes) {
        this.el.nativeElement.style.backgroundColor = 'green';
    } else {
        this.el.nativeElement.style.backgroundColor = '';
    }
  }

  ngOnInit(): void {
      this.highlight()
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.highlight()
  }
}

