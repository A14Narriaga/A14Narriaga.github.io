import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
  <div [ngSwitch]="name">
    <icon-angular *ngSwitchCase="'Angular'"></icon-angular>
    <icon-react *ngSwitchCase="'React'"></icon-react>
    <icon-javascript *ngSwitchCase="'Java Script'"></icon-javascript>
    <icon-typescript *ngSwitchCase="'Type Script'"></icon-typescript>
    <icon-html-5 *ngSwitchCase="'HTML5'"></icon-html-5>
    <icon-pug *ngSwitchCase="'Pug'"></icon-pug>
    <icon-css-3 *ngSwitchCase="'CSS3'"></icon-css-3>
    <icon-sass *ngSwitchCase="'SASS'"></icon-sass>
    <icon-node-js *ngSwitchCase="'NodeJS'"></icon-node-js>
    <icon-php *ngSwitchCase="'PHP'"></icon-php>
    <icon-mysql *ngSwitchCase="'MySQL'"></icon-mysql>
    <icon-redis *ngSwitchCase="'Redis'"></icon-redis>
    <icon-figma *ngSwitchCase="'Figma'"></icon-figma>
    <icon-adobe-xd *ngSwitchCase="'Adobe XD'"></icon-adobe-xd>
    <icon-vs-code *ngSwitchCase="'VS Code'"></icon-vs-code>
    <icon-git *ngSwitchCase="'Git'"></icon-git>
    <icon-vim *ngSwitchCase="'Vim'"></icon-vim>
    <icon-latex *ngSwitchCase="'LaTeX'"></icon-latex>
    <icon-rust *ngSwitchCase="'Rust'"></icon-rust>
    <icon-web-assembly *ngSwitchCase="'WebAssembly'"></icon-web-assembly>
  </div>`,
  styles: [``]
})

export class IconComponent {

  @Input() name: string = '';

}
