import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})

export class NavbarComponent {

  @ViewChild('nav') refNav!: ElementRef<HTMLDivElement>
  @ViewChild('menuIcon') refMenuIcon!: ElementRef<SVGElement>

  toggleNav() {
    const nav = this.refNav.nativeElement;
    const menuIcon = this.refMenuIcon.nativeElement;
    nav.setAttribute(
      'data-visible',
      nav.getAttribute('data-visible') === 'false' ? 'true' : 'false'
    );
    menuIcon.setAttribute(
      'data-close',
      menuIcon.getAttribute('data-close') === 'false' ? 'true' : 'false'
    )
  }

}
