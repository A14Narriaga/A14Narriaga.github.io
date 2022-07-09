import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../../../services/website/website.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  certifications: any = [];

  constructor(
    private service: WebsiteService
  ) { }

  ngOnInit(): void {
    this.service.homeData$.subscribe(
      data => this.certifications = data.certifications
    )
  }
}
