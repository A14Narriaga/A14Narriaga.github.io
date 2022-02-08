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
  skills = [
    {
      section: "Fontent",
      content: [
        { name: "Angular", level: 64, icon: "fab fa-angular" },
        { name: "React", level: 33, icon: "fab fa-react" },
        { name: "JavaScript", level: 64, icon: "fab fa-js-square" },
        { name: "TypeScript", level: 64, icon: "fas fa-wrench" },
        { name: "HTML5", level: 64, icon: "fab fa-html5" },
        { name: "Pug", level: 64, icon: "fas fa-wrench" },
        { name: "CSS3", level: 64, icon: "fab fa-css3-alt" },
        { name: "SASS / SCSS", level: 64, icon: "fab fa-sass" }
      ]
    },
    {
      section: "Tools",
      content: [
        { name: "VS Code", level: 64, icon: "fas fa-code" },
        { name: "Git", level: 33, icon: "fab fa-git-alt" },
        { name: "Vim", level: 64, icon: "fas fa-wrench" },
        { name: "Latex", level: 64, icon: "fas fa-file-pdf" }
      ]
    },
    {
      section: "Databases",
      content: [
        { name: "MySQL", level: 64, icon: "fas fa-database" },
        { name: "Redis", level: 33, icon: "fas fa-database" }
      ]
    },
    {
      section: "Desing",
      content: [
        { name: "Figma", level: 64, icon: "fab fa-figma" },
        { name: "Adobe XD", level: 33, icon: "fas fa-pen-nib" }
      ]
    },
    {
      section: "Backend",
      content: [
        { name: "NodeJS", level: 10, icon: "fab fa-node-js" }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
    const currentHour = new Date().getHours();
    this.themeDark = sessionStorage.getItem('themeDark') === null
      ? !(currentHour >= 7 && currentHour <= 19)
      : sessionStorage.getItem('themeDark') === 'true';
    this.themeDark
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
    // document.getElementById('colorBg')?.setAttribute('data-dark', `${this.themeDark}`)
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
      sentence += this.about[i - 1] === '.' ? '\n' : '';
      setTimeout(() =>
        this.refTextP.nativeElement.innerText = sentence + " |", 0
      );
      setTimeout(putLetter, this.about[i] === '.' ? 600 : 30);
      i++;
    }
    putLetter();
  }

}
