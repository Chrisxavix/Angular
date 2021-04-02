import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSubrayado]'
})
export class SubrayadoDirective {

  constructor(
    private elem: ElementRef,
    private renderer: Renderer2,
  ) {
    /* Es mejor usar render */
    /* elem.nativeElement.style.textDecoration = 'underline';
    elem.nativeElement.style.color = '#fff'; */
    renderer.setStyle(this.elem.nativeElement, 'text-decoration', 'underline');
    renderer.setStyle(this.elem.nativeElement, 'color', '#fff');
  }

  @HostListener('mouseover') onTest() {
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'red');
  }

  @HostListener('mouseout') onTest2() {
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'white');
  }
}
