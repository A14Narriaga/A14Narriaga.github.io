import { Component, Input } from '@angular/core';
import { openUrl } from '../../../../utils';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})

export class CardProjectComponent {

  @Input() project: any = [];

  openWindow = (e: MouseEvent, url: string) =>
    openUrl(e, url);

}
