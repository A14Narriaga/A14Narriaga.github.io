import { Component, Input } from '@angular/core';

@Component({
  selector: 'Button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {

  @Input() variant: "primary" | "secondary" | "tertiary" = "primary";
  @Input() size: "small" | "large" = 'small';
  @Input() disabled: boolean = false;
  @Input() iconStart: string = '';
  @Input() iconEnd: string = "";
  @Input() text: string = "";

}
