import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'icon-menu',
  template: `
    <svg
      #menuIcon
      class="menu-icon"
      data-close="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 173.75 147.32">
      <g id="bottom">
        <path d="M87.14,121.45c23.13,0,46.26-.08,69.39,0,11.5,0,17.77,4.71,17.15,13.17-.74,10-7.72,12.69-16.7,12.68-47,0-94,0-140.95-.07-10.71,0-16.47-4.89-16-13.22.56-9.52,6.85-12.58,15.53-12.58Q51.36,121.48,87.14,121.45Z" />
      </g>
      <g id="middle">
        <path d="M85.66,88.17c-23.12,0-46.24.07-69.35,0C5.21,88.1-.31,83.86,0,75.5.49,65,7.83,63,16.62,63Q87,63,157.49,63c10.83,0,16.7,4.6,16.24,12.79-.58,10.26-7.49,12.5-16.56,12.42C133.34,88,109.5,88.17,85.66,88.17Z" />
      </g>
      <g id="top">
        <path d="M86.53,25.88c-23.49,0-47-.12-70.46.05C7.41,26,1,23.58.06,14-.69,5.89,5.2.21,15.66.16q71-.34,142,0c8.73,0,16.24,3.29,15.95,13.49S166,26,157,26C133.51,25.73,110,25.88,86.53,25.88Z" />
      </g>
    </svg>`,
  styles: [`
    .menu-icon {
      #top,#middle,#bottom {
        transition:transform 350ms cubic-bezier(1, -0.32, 0, 1.44);
        fill: var(--primary-color);
      }
      #top { transform-origin: top left; }
      #middle { transform-origin: center center; }
      #bottom { transform-origin: bottom right; }
    }
    .menu-icon[data-close="true"] {
      #top { transform: rotate(45deg) translateX(15%) translateY(-15%); }
      #middle { transform: rotate(-45deg); }
      #bottom { transform: rotate(45deg) translateX(-15%) translateY(15%); }
    }
  `]
})

export class IconMenuComponent {

  @ViewChild('menuIcon') refMenuIcon!: ElementRef<SVGElement>

  @Input() set _isOpen(isOpen: boolean) {
    setTimeout(
      () => this.refMenuIcon.nativeElement
        .setAttribute('data-close', `${!isOpen}`)
      , 0
    );
  }

}
