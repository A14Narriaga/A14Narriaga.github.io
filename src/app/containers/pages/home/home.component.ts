import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  loading = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.loading = false, 2050);
  }

}
