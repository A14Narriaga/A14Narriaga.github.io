import { NgModule } from '@angular/core';
import { RippleDirective } from './ripple/ripple.directive';

@NgModule({
  declarations: [
    RippleDirective
  ],
  exports: [
    RippleDirective
  ]
})
export class DirectivesModule { }
