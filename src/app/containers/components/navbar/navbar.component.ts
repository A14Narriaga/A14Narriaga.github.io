import { Component, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  @Input() set _isDark(isDark: boolean) { this.isDark = !isDark; }

  @ViewChild('nav') refNav!: ElementRef<HTMLDivElement>

  isOpen = true;
  isDark = true;
  isES = true;
  isOn = false;

  toggleNav() {
    const nav = this.refNav.nativeElement;
    this.isOpen = nav.getAttribute('data-visible') === 'true';
    nav.setAttribute('data-visible', `${!this.isOpen}`);
  }

  toggleSound() {
    this.isOn = !this.isOn;
  }

  toggleTheme() {
    this.isDark = document.body.classList.contains('dark');
    document.body.classList.toggle('dark');
    // document.getElementById('colorBg')?.setAttribute('data-dark', `${!isDark}`);
    sessionStorage.setItem('themeDark', `${!this.isDark}`);
  }

  toggleLanguage() {
    this.isES = !this.isES;
  }

}
