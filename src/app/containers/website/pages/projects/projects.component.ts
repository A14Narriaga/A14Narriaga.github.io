import { Component } from '@angular/core';
import { WebsiteService } from '../../../../services/website/website.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {

  projects: any = [];

  constructor(
    private service: WebsiteService
  ) { }

  ngOnInit(): void {
    this.service.homeData$.subscribe(
      data => this.projects = data.projects
    )
  }

}
