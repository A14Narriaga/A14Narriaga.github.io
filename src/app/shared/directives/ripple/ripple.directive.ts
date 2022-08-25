import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[Ripple]'
})

export class RippleDirective {

  @Input() rippleColor: string = 'hsla(0, 0%, 76%, 0.137)';

  constructor(elementRef: ElementRef<HTMLElement>) {
    const element = elementRef.nativeElement;
    element.classList.add('ripple');
    element.addEventListener('click', (e: any) => {
      let ripple = document.createElement('span');
      ripple.classList.add('ripple-bubble');
      ripple.style.backgroundColor = this.rippleColor;
      const rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      element.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    })
  }

}
