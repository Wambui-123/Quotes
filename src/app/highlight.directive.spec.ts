// import { HighlightDirective } from './highlight.directive';

// describe('HighlightDirective', () => {
//   it('should create an instance', () => {
//     const directive = new HighlightDirective();
//     expect(directive).toBeTruthy();
//   });
// });



  
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightQoute]'
})
export class HighlightQouteDirective {

  constructor(private elem:ElementRef) { 
  }
  @HostListener("click") onClicks(){
    this.textDeco("green")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }
  private textDeco(action:string){
    this.elem.nativeElement.style.color=action;
  }

}