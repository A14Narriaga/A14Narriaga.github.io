import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import ConfigurationService from '../../../../services/configuration/configuration.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  @Input() navOpts: any = [];

  @ViewChild('nav') refNav!: ElementRef<HTMLDivElement>

  theme!: string;
  language!: string;
  soundIsPlaying!: boolean;
  isOpen = true;

  constructor(
    private service: ConfigurationService,
  ) { }

  ngOnInit(): void {
    this.theme = this.service.getTheme();
    this.language = this.service.getLanguage();
  }

  toggleNav() {
    const nav = this.refNav.nativeElement;
    this.isOpen = nav.getAttribute('data-visible') === 'true';
    nav.setAttribute('data-visible', `${!this.isOpen}`);
  }

  toggle = (key: string) => {
    switch (key) {
      case 'theme':
        this.theme = this.service.toggleTheme(); break;
      case 'language':
        this.language = this.service.toggleLanguage(); break;
      case 'sound':
        this.soundIsPlaying = this.service.toggleSound(); break;
    }
    this.toggleNav();
  }

}
