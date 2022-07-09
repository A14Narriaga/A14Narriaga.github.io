import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../../../services/website/website.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experience: any = [];

  constructor(
    private service: WebsiteService
  ) { }

  ngOnInit(): void {
    this.service.homeData$.subscribe(
      data => this.experience = data.experience
    )
  }

}
