import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDVideojuego]'
})
export class DVideojuegoDirective {

  constructor(private elemento: ElementRef, private render: Renderer2){}
  
  @HostListener('mouseenter') onMouseEnter(){
      this.render.setStyle(this.elemento.nativeElement, 'color', 'grey');
    }

  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(this.elemento.nativeElement, 'color', '');
  }
}
