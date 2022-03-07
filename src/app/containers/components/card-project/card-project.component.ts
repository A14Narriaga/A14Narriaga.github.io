import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})

export class CardProjectComponent {

  @Input() project: any = [];

  openProject = () => window.open(this.project.link, '_blank');

}
