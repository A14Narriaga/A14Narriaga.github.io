import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  imports: [
    DirectivesModule
  ],
  declarations: [
    ButtonComponent,
  ],
  exports: [
    ButtonComponent,
  ]
})

export class AtomsModule { }
