import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor() { }

  getSkills = () => [
    {
      section: "Fontent",
      content: [
        { name: "Angular", level: 64 },
        { name: "React", level: 33 },
        { name: "JavaScript", level: 64 },
        { name: "TypeScript", level: 64 },
        { name: "HTML5", level: 64 },
        { name: "Pug", level: 64 },
        { name: "CSS3", level: 64 },
        { name: "SASS", level: 64 }
      ]
    },
    {
      section: "Tools",
      content: [
        { name: "VS Code", level: 64 },
        { name: "Git", level: 33 },
        { name: "Vim", level: 64 },
        { name: "LaTeX", level: 64 }
      ]
    },
    {
      section: "Databases",
      content: [
        { name: "MySQL", level: 64 },
        { name: "Redis", level: 33 }
      ]
    },
    {
      section: "Desing",
      content: [
        { name: "Figma", level: 64 },
        { name: "Adobe XD", level: 33 }
      ]
    },
    {
      section: "Backend",
      content: [
        { name: "NodeJS", level: 10 }
      ]
    }
  ];

  sendMsg(info: any): void {
    console.log(info);
  }

}
