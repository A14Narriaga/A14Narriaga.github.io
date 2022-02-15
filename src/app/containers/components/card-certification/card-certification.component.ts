import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-certification',
  templateUrl: './card-certification.component.html',
  styleUrls: ['./card-certification.component.scss']
})

export class CardCertificationComponent {

  @Input() certification: any = [];

}
