import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appRainbow]'
})
export class RainbowDirective {
  colors: string[] = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];

  @HostBinding('style.color') color: string = '';
  @HostBinding('style.border-color') borderColor: string = '';

  @HostListener('keyup') onKeyUp() {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    this.color = this.borderColor = this.colors[randomIndex];
  }
}