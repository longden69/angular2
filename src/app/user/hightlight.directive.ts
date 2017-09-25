import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]',
})

export class HightlightDirective {
  constructor(private el: ElementRef) {}

  @Input('appHightlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.hightlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hightlight(null);
  }

  private hightlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
