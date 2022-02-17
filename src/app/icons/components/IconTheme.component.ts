import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'icon-theme',
  template: `
    <svg
      #themeIcon
      class="theme-icon"
      data-dark="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 294.3 294.26">
      <g id="sun-rays">
        <path d="M146.77,0a19.62,19.62,0,1,1-19.23,20.2A19.66,19.66,0,0,1,146.77,0Z"/>
        <path d="M59.22,39.24a19.62,19.62,0,1,1-20,19.45A19.65,19.65,0,0,1,59.22,39.24Z"/>
        <path d="M255,60a19.63,19.63,0,1,1-18.63-20.77A19.69,19.69,0,0,1,255,60Z"/>
        <path d="M19.7,166.74a19.61,19.61,0,1,1,19.53-19.9A19.63,19.63,0,0,1,19.7,166.74Z" />
        <path d="M294.3,147.44a19.62,19.62,0,1,1-19.5-19.92A19.66,19.66,0,0,1,294.3,147.44Z"/>
        <path d="M59.07,255a19.62,19.62,0,1,1,19.4-20A19.65,19.65,0,0,1,59.07,255Z"/>
        <path d="M235.84,255a19.62,19.62,0,1,1,19.22-20.22A19.64,19.64,0,0,1,235.84,255Z"/>
        <path d="M166.77,275A19.62,19.62,0,1,1,147.27,255,19.66,19.66,0,0,1,166.77,275Z"/>
      </g>
      <g id="sun">
        <path d="M245.25,147.3a98.13,98.13,0,0,1-98.48,97.91c-54.14-.11-97.89-44.29-97.72-98.67.17-53.73,44.18-97.49,98.07-97.5A98.13,98.13,0,0,1,245.25,147.3Z"/>
      </g>
      <g id="moon">
        <path d="M127.65,24.4c-21.57,47-20,91.93,10.95,133.21S212.46,212.75,263,205.76c-11.16,37.05-72.76,69.28-119.84,63.4C81,261.39,34.35,212.73,31.48,152.59,28.57,91.67,68.59,37.83,127.65,24.4Z"/>
      </g>
    </svg>`,
  styles: [`
    .theme-icon {
      width: 1.4rem;
      aspect-ratio: 1;
      fill: var(--navbar-text-color);
      transition: fill 0.2s cubic-bezier(1, -0.01, 0, 1.11);
      #moon,#sun,#sun-rays {
        transition: transform 350ms cubic-bezier(1, -0.32, 0, 1.44);
      }
      #moon {
        transform-origin: center center;
        transform: rotate(-90deg) scale(0);
        opacity: 0;
      }
      #sun {transform-origin: center center;}
      #sun-rays {transform-origin: center center;}
      &:hover {
        fill: var(--primary-color);
      }
    }
    .theme-icon[data-dark="false"] {
      #moon {
        transform: rotate(0) scale(1);
        opacity: 1;
      }
      #sun {
        opacity: 0;
        transform: scale(0);
      }
      #sun-rays {
        opacity: 0;
        transform: rotate(-90deg) scale(0);
      }
    }
  `]
})

export class IconThemeComponent {

  @ViewChild('themeIcon') refThemeIcon!: ElementRef<SVGElement>

  @Input() set _isDark(isDark: boolean) {
    setTimeout(
      () => this.refThemeIcon.nativeElement
        .setAttribute('data-dark', `${isDark}`)
      , 0
    );
  }

}
