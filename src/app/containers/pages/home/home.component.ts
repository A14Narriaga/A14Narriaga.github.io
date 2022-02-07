import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  @ViewChild('textP') refTextP!: ElementRef<HTMLParagraphElement>;

  loading = true;
  themeDark: any;
  about = "Ingeniero en sistemas computacionales, especializado en construir y ocasionalmente diseñar excepcionales experiencias digitales. Buscando crear la mejor versión de mí, amante de aprender, compartir conocimiento y dejar huella.";

  constructor() { }

  ngOnInit(): void {
    const currentHour = new Date().getHours();
    this.themeDark = sessionStorage.getItem('themeDark') === null
      ? !(currentHour >= 7 && currentHour <= 19)
      : sessionStorage.getItem('themeDark') === 'true';
    this.themeDark
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
    document.getElementById('colorBg')?.setAttribute('data-dark', `${this.themeDark}`)
    setTimeout(() => {
      this.loading = false
      this.typeText()
    }, 2500);
  }


  typeText() {
    let i = 0;
    let sentence = "";
    const putLetter = () => {
      if (i === this.about.length) return;
      sentence += this.about[i];
      setTimeout(() =>
        this.refTextP.nativeElement.innerText = sentence + " |"
        , 0);
      // sentence += this.about[i] === '.' && this.about.length - 1 !== i ? '\n' : '';
      if (this.about[i] === '.') setTimeout(putLetter, 600);
      else setTimeout(putLetter, 30);
      i++;
    }
    putLetter();
  }

}
