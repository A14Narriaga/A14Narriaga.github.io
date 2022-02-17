import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})

export class CardProjectComponent {

  @Input() project: any = [];

  styles = {
    "fill": "var(--sub-text-color)",
    "width": "1.4rem",
    "height": "1.4rem",
  }

}
