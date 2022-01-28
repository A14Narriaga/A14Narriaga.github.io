import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})

export class NavbarComponent {

  @ViewChild('nav') refNav!: ElementRef<HTMLDivElement>

  toggleNav() {
    const nav = this.refNav.nativeElement;
    nav.setAttribute(
      'data-visible',
      nav.getAttribute('data-visible') === 'false' ? 'true' : 'false'
    );
  }

}
