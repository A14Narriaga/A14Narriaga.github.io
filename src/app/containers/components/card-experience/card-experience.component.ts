import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-experience',
  templateUrl: './card-experience.component.html',
  styleUrls: ['./card-experience.component.scss']
})

export class CardExperienceComponent {

  @Input() experience: any = [];

}
