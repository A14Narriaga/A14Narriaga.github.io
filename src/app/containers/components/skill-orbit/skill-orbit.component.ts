import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-orbit',
  templateUrl: './skill-orbit.component.html',
  styleUrls: ['./skill-orbit.component.scss']
})

export class SkillOrbitComponent {

  @Input() skill: any = [];

}
