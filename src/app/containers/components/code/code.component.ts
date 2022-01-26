import { Component } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.sass']
})

export class CodeComponent {

  color = new Map([
    ['const', 'blue'],
    ['new', 'blue'],
    ['"', 'green']
  ])

  code = [
    `const str = "This is my string";`,
    `const str =  new String("This is my string");`,
    `console.log(typeof str);`,
    `console.log(typeof str);`,
  ]

}
