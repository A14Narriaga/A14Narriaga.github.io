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
  navOpts: any = [];
  info: any = [];
  skills: any = [];
  projects: any = [];
  certifications: any = [];
  experiences: any = [];
  timers: any = []

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
        if (data.length !== 0) {
          this.navOpts = data[0];
          this.info = data[1];
          this.skills = data[2];
          this.projects = data[3];
          this.certifications = data[4];
          this.experiences = data[5];
          this.stopTypeText();
          this.typeText(this.info.about);
        }
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

  stopTypeText() {
    clearTimeout(this.timers[0]);
    clearTimeout(this.timers[1]);
  }

  typeText(text: string): void {
    let i = 0;
    let sentence = "";
    const putLetter = () => {
      if (i === text.length) return;
      sentence += text[i];
      sentence += text[i - 1] === '.' ? '\n' : '';
      this.timers[0] = setTimeout(() =>
        this.refTextP.nativeElement.innerText = sentence + " |", 0
      );
      this.timers[1] = setTimeout(putLetter, text[i] === '.' ? 600 : 30);
      i++;
    }
    putLetter();
  }
}
