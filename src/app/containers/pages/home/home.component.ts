import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  loading = true;

  constructor() { }

  ngOnInit(): void {
    const themeDark = localStorage.getItem('themeDark');
    themeDark === 'true' ? document.body.classList.add('dark') : "";
    setTimeout(() => this.loading = false, 2500);
  }

}
