import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
 
  @HostBinding('style.backgroundColor') backgroundColor: string = 'black';

  constructor( private elRef:ElementRef, private renderer: Renderer2 ) { }
  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  }
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue', false, false);
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent', false, false);
    this.backgroundColor = 'grey';
  }
}
