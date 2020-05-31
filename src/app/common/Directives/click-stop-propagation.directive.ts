import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickStopPropagation]'
})
export class ClickStopPropagationDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  public onClick(event: any): void
  {
      event.stopPropagation();
  }

  @HostListener('mousedown', ['$event'])
  public onmMouseDown(event: any): void
  {
      event.stopPropagation();
  }
}
