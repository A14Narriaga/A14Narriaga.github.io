import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  @ViewChild('textP') refTextP!: ElementRef<HTMLParagraphElement>;

  loading = true;
  themeDark: any;
  info: any = [];
  skills: any = [];
  projects: any = [];
  certifications: any = [];
  experiences: any = [];

  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.info = this.service.getInfo();
    this.skills = this.service.getSkills();
    this.projects = this.service.getProjects();
    this.certifications = this.service.getCertifications();
    this.experiences = this.service.getExperience();
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
      this.typeText(this.info.about)
    }, 2500);
  }

  typeText(text: string) {
    let i = 0;
    let sentence = "";
    const putLetter = () => {
      if (i === text.length) return;
      sentence += text[i];
      sentence += text[i - 1] === '.' ? '\n' : '';
      setTimeout(() =>
        this.refTextP.nativeElement.innerText = sentence + " |", 0
      );
      setTimeout(putLetter, text[i] === '.' ? 600 : 30);
      i++;
    }
    putLetter();
  }

}
