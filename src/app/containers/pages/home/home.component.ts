import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  @ViewChild('textP') refTextP!: ElementRef<HTMLParagraphElement>;

  loading$!: Observable<boolean>;
  dataSubs: any;
  theme: any;
  info: any = [];
  skills: any = [];
  projects: any = [];
  certifications: any = [];
  experiences: any = [];

  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.theme = this.service.getTheme();
    this.theme === 'dark'
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
    this.service.getData();
    this.loading$ = this.service.loading$;
    this.setScrollAnimations();
    this.dataSubs = this.service.data$.subscribe(
      data => {
        this.info = data[0];
        this.skills = data[1];
        this.projects = data[2];
        this.certifications = data[3];
        this.experiences = data[4];
        this.typeText(this.info.about);
      }
    );
  }

  ngOnDestroy(): void {
    this.dataSubs.complete();
  }

  setScrollAnimations() {
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
      threshold: 1,
    };
    const appearOnScroll = new IntersectionObserver(
      (entries, appearOnScroll) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
          }
        })
      }, appearOptions
    )
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    })
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
