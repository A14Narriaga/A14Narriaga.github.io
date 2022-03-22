import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  @Input() navOpts: any = [];

  @ViewChild('nav') refNav!: ElementRef<HTMLDivElement>

  isOpen = true;
  isDark = true;
  isES = false;
  isOn = false;

  constructor(private service: HomeService) {
    this.isDark = this.service.getTheme() !== 'dark';
  }

  toggleNav() {
    const nav = this.refNav.nativeElement;
    this.isOpen = nav.getAttribute('data-visible') === 'true';
    nav.setAttribute('data-visible', `${!this.isOpen}`);
  }

  toggleSound() {
    this.isOn = !this.isOn;
    this.toggleNav();
  }

  toggleTheme() {
    this.isDark = this.service.changeTheme() !== 'dark';
    document.body.classList.toggle('dark');
    this.toggleNav();
  }

  toggleLanguage() {
    this.isES = !this.isES;
    this.service.changeLanguaje();
    this.toggleNav();
  }

}
