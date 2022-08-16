import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { WebsiteService } from '../../../../services/website/website.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  colors = [['blue']]
  currentColors = this.colors[Math.floor(Math.random() * this.colors.length)]
  hello: string = '';
  resume: string = '';
  timers: any = [];

  @ViewChild('textP') refTextP!: ElementRef<HTMLParagraphElement>;

  constructor(
    private websiteService: WebsiteService
  ) { }

  ngOnInit(): void {
    this.websiteService.homeData$.subscribe(
      data => {
        if (JSON.stringify(data) !== '{}') {
          this.resume = data.welcome.resume;
          this.hello = data.welcome.hello;
          this.stopTypeText();
          this.typeText(data.welcome.about);
        }
      }
    )
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
