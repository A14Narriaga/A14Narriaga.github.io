import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import ConfigurationService from '../../services/configuration/configuration.service';
import { WebsiteService } from '../../services/website/website.service';

@Component({
  selector: 'app-website',
  template: `
    <app-loader *ngIf="loading$ | async"></app-loader>
    <app-navbar [navOpts]="navOpts"></app-navbar>
    <router-outlet></router-outlet>
    <app-bot></app-bot>
  `,
  styles: [``]
})

export class WebsiteComponent implements OnInit {

  loading$!: Observable<boolean>;
  navOpts: any = [];

  constructor(
    private configService: ConfigurationService,
    private websiteService: WebsiteService
  ) { }

  ngOnInit(): void {
    this.loading$ = this.websiteService.loading$;
    this.configService.loadTheme();
    this.websiteService.homeData$.subscribe(
      data => this.navOpts = data.navOpts
    )
  }

}
