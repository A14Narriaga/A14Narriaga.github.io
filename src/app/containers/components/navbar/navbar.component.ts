import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})

export class NavbarComponent {

  @ViewChild('nav') refNav!: ElementRef<HTMLDivElement>
  @ViewChild('menuIcon') refMenuIcon!: ElementRef<SVGElement>
  @ViewChild('soundIcon') refSoundIcon!: ElementRef<SVGElement>
  @ViewChild('themeIcon') refThemeIcon!: ElementRef<SVGElement>

  toggleNav() {
    const nav = this.refNav.nativeElement;
    nav.setAttribute(
      'data-visible',
      nav.getAttribute('data-visible') === 'false' ? 'true' : 'false'
    );
    const menuIcon = this.refMenuIcon.nativeElement;
    menuIcon.setAttribute(
      'data-close',
      menuIcon.getAttribute('data-close') === 'false' ? 'true' : 'false'
    )
  }

  toggleSound() {
    const soundIcon = this.refSoundIcon.nativeElement;
    soundIcon.setAttribute(
      'data-sound',
      soundIcon.getAttribute('data-sound') === 'false' ? 'true' : 'false'
    )
  }

  toggleTheme() {
    const themeIcon = this.refThemeIcon.nativeElement;
    themeIcon.setAttribute(
      'data-dark',
      themeIcon.getAttribute('data-dark') === 'false' ? 'true' : 'false'
    )
  }

}
