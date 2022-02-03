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
  @ViewChild('languageIcon') refLanguageIcon!: ElementRef<SVGElement>

  toggleNav() {
    const nav = this.refNav.nativeElement;
    const menuIcon = this.refMenuIcon.nativeElement;
    const isOpen = nav.getAttribute('data-visible') === 'true';
    nav.setAttribute('data-visible', `${!isOpen}`);
    menuIcon.setAttribute('data-close', `${!isOpen}`);
  }

  toggleSound() {
    const soundIcon = this.refSoundIcon.nativeElement;
    const isOn = soundIcon.getAttribute('data-sound') === 'true';
    soundIcon.setAttribute('data-sound', `${!isOn}`);
  }

  toggleTheme() {
    const themeIcon = this.refThemeIcon.nativeElement;
    const isDark = themeIcon.getAttribute('data-dark') === 'true';
    themeIcon.setAttribute('data-dark', `${!isDark}`)
    document.body.classList.toggle('dark');
    localStorage.setItem('themeDark', `${isDark}`);
  }

  toggleLanguage() {
    const languageIcon = this.refLanguageIcon.nativeElement;
    const isEs = languageIcon.getAttribute('data-es') === 'true';
    languageIcon.setAttribute('data-es', `${!isEs}`)
  }

}
