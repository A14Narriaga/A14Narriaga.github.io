import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../../../services/website/website.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent implements OnInit {

  skills: any = [];

  constructor(
    private service: WebsiteService
  ) { }

  ngOnInit(): void {
    this.service.homeData$.subscribe(
      data => this.skills = data.skills
    )
  }

}
