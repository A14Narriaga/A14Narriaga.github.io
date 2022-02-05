import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  loading = true;
  themeDark: any;

  constructor() { }

  ngOnInit(): void {
    const currentHour = new Date().getHours();
    this.themeDark = sessionStorage.getItem('themeDark') === null
    ? !(currentHour >= 7 && currentHour <= 19)
    : sessionStorage.getItem('themeDark') === 'true';
    this.themeDark
    ? document.body.classList.add('dark')
    : document.body.classList.remove('dark');
    setTimeout(() => this.loading = false, 2500);
    document.getElementById('colorBg')?.setAttribute('data-dark', `${this.themeDark}`)
  }

}
