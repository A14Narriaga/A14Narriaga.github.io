import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import ConfigurationService from '../configuration/configuration.service';

@Injectable({
  providedIn: 'root'
})

export class WebsiteService {

  private homeData = new BehaviorSubject<any>({});
  homeData$ = this.homeData.asObservable();
  private loading = new BehaviorSubject<boolean>(true);
  loading$ = this.loading.asObservable();
  private botOnResume = new BehaviorSubject<boolean>(false);
  botOnResume$ = this.botOnResume.asObservable();

  constructor(
    private service: ConfigurationService,
  ) {
    setTimeout(() => {
      this.service.languaje$.subscribe(
        language => {
          this.homeData.next({
            navOpts: this.getNavOpts(language),
            welcome: this.getWelcome(language),
            experience: this.getExperience(language),
            projects: this.getProjects(language),
            skills: this.getSkills(language),
            certifications: this.getCertifications(language)
          })
        }
      )
      this.loading.next(false)
    }, 2500);
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     event.url === '/'
    //       ? document.body.classList.add('isHomePage')
    //       : document.body.classList.remove('isHomePage')
    //   }
    // });
  }

  openBotOnDownloadResume = () => {
    this.botOnResume.next(true);
    setTimeout(() => {
      this.botOnResume.next(false);
    }, 0);
  }

  private getNavOpts = (language: string) => [
    { key: 'experience', title: language === 'es' ? 'Experiencia' : 'Experience' },
    { key: 'projects', title: language === 'es' ? 'Proyectos' : 'Projects' },
    { key: 'skills', title: language === 'es' ? 'Habilidades' : 'Skills' },
    { key: 'certifications', title: language === 'es' ? 'Certificaciones' : 'Certifications' },
  ]

  private getWelcome = (language: string) => ({
    resume: language === 'es' ? 'Curriculum' : 'Resume',
    hello: language === 'es' ? 'Hola, mi nombre es' : 'Hi, my name is',
    about: language === 'es'
      ? 'Ingeniero en sistemas computacionales, especializado en construir y ocasionalmente diseñar excepcionales experiencias digitales. Buscando crear la mejor versión de mí, amante de aprender, compartir conocimiento y dejar huella.'
      : 'I´m computer systems engineer specializing in building and occasionally designing exceptional digital experiences. Seeking to create the best version of myself, a lover of learning, sharing knowledge and leaving a mark.'
  })

  private getExperience = (language: string) => [
    {
      link: 'https://laleo.com',
      company: 'LALEO',
      position: language === 'es' ? 'Desarrollador Fullstack' : 'Fullstack Developer',
      date: language === 'es' ? 'AGO 2021 - Presente' : 'AUG 2021 - Present',
      learning: language === 'es'
        ? [
          'Escribiendo codigo moderno y mantenible para diversos proyectos internos enfocados a consumidores asi como brindando apoyo en el area de diseño.',
          'Trabajando con una variedad de diferentes lenguajes y frameworks como JavaScript, TypeScript, React, Angular, Materialize, etc, asi como MySQL y Redis como manejadores de base de datos.',
          'Estableciendo una comunicacion con equipos multidisiplinarios como diseñadores e ingenieros.',
          'Implementando Jira y Assana para gestionar proyectos, usando la metodologia agil SCRUM.'
        ] : [
          'Writing modern and maintainable code for various internal projects focused on consumers as well as providing support in the design area.',
          'Working with a variety of different languages and frameworks like JavaScript, TypeScript, React, Angular, Materialize, etc, as well as MySQL and Redis as database drivers.',
          'Establishing communication with multidisciplinary teams such as designers and engineers.',
          'Implementing Jira and Assana to manage projects, using the agile SCRUM methodology.'
        ]
    }
  ]

  private getProjects = (language: string) => [
    {
      year: '2022',
      link: 'https://a14narriaga.github.io/langtons-ant',
      repo: 'https://github.com/A14Narriaga/langtons-ant',
      title: language === 'es' ? 'Hormiga de Langton' : 'Langton´s ant',
      description: language === 'es'
        ? 'Simulación creada durante mi último semestre en la carrera usando React para manejar la interfaz gráfica, así como Rust del lado del Backend implementando WebAssembly.para así dar vida a esta interesante aplicación.'
        : 'Simulation created during my last semester of college using React to manage the graphical interface, as well as Rust on the Backend side implementing WebAssembly, in order to bring this interesting application to life.',
      tools: ['React', 'HTML5', 'SASS', 'Rust', 'Type Script', 'WebAssembly'],
      status: language === 'es' ? 'Nuevo' : 'New'
    },
    {
      year: '2021',
      link: 'https://a14narriaga.github.io/to-do',
      repo: 'https://github.com/A14Narriaga/to-do',
      title: language === 'es' ? 'Lista de tareas' : 'Todo list',
      description: language === 'es'
        ? 'Interesante aplicacion que desarrolle para gestionar un CRUD de tareas, a manera de practica implementando useState and useEffect de React.'
        : 'Interesting application that I developed to manage a CRUD of tasks, as a practice by implementing React´s useState and useEffect.',
      tools: ['HTML5', 'React', 'SASS', 'Type Script'],
      status: ''
    },
    {
      year: '2021',
      link: 'https://a14narriaga.github.io/to-do',
      repo: 'https://github.com/A14Narriaga/to-do',
      title: language === 'es' ? 'Lista de tareas' : 'Todo list',
      description: language === 'es'
        ? 'Interesante aplicacion que desarrolle para gestionar un CRUD de tareas, a manera de practica implementando useState and useEffect de React.'
        : 'Interesting application that I developed to manage a CRUD of tasks, as a practice by implementing React´s useState and useEffect.',
      tools: ['HTML5', 'React', 'SASS', 'Type Script'],
      status: ''
    },
    {
      year: '2022',
      link: 'https://a14narriaga.github.io/langtons-ant',
      repo: 'https://github.com/A14Narriaga/langtons-ant',
      title: language === 'es' ? 'Hormiga de Langton' : 'Langton´s ant',
      description: language === 'es'
        ? 'Simulación creada durante mi último semestre en la carrera usando React para manejar la interfaz gráfica, así como Rust del lado del Backend implementando WebAssembly.para así dar vida a esta interesante aplicación.'
        : 'Simulation created during my last semester of college using React to manage the graphical interface, as well as Rust on the Backend side implementing WebAssembly, in order to bring this interesting application to life.',
      tools: ['React', 'HTML5', 'SASS', 'Rust', 'Type Script', 'WebAssembly'],
      status: language === 'es' ? 'Nuevo' : 'New'
    },
    {
      year: '2021',
      link: 'https://a14narriaga.github.io/to-do',
      repo: 'https://github.com/A14Narriaga/to-do',
      title: language === 'es' ? 'Lista de tareas' : 'Todo list',
      description: language === 'es'
        ? 'Interesante aplicacion que desarrolle para gestionar un CRUD de tareas, a manera de practica implementando useState and useEffect de React.'
        : 'Interesting application that I developed to manage a CRUD of tasks, as a practice by implementing React´s useState and useEffect.',
      tools: ['HTML5', 'React', 'SASS', 'Type Script'],
      status: ''
    },
    {
      year: '2021',
      link: 'https://a14narriaga.github.io/to-do',
      repo: 'https://github.com/A14Narriaga/to-do',
      title: language === 'es' ? 'Lista de tareas' : 'Todo list',
      description: language === 'es'
        ? 'Interesante aplicacion que desarrolle para gestionar un CRUD de tareas, a manera de practica implementando useState and useEffect de React.'
        : 'Interesting application that I developed to manage a CRUD of tasks, as a practice by implementing React´s useState and useEffect.',
      tools: ['HTML5', 'React', 'SASS', 'Type Script'],
      status: ''
    }
  ]

  private getSkills = (language: string) => [
    {
      section: "Frontend",
      content: [
        { name: "Angular", level: 64 },
        { name: "React", level: 33 },
        { name: "Java Script", level: 64 },
        { name: "Type Script", level: 64 },
        { name: "HTML5", level: 64 },
        { name: "Pug", level: 64 },
        { name: "CSS3", level: 64 },
        { name: "SASS", level: 64 }
      ]
    },
    {
      section: "Backend",
      content: [
        { name: "NodeJS", level: 10 },
        { name: "PHP", level: 10 },
        { name: "MySQL", level: 64 },
        { name: "Redis", level: 33 },
        { name: "Figma", level: 64 },
        { name: "Adobe XD", level: 33 }
      ]
    },
    {
      section: language === 'es' ? 'Bases de datos' : 'Databases',
      content: [
        { name: "MySQL", level: 64 },
        { name: "Redis", level: 33 }
      ]
    },
    {
      section: language === 'es' ? 'Diseño' : 'Design',
      content: [
        { name: "Figma", level: 64 },
        { name: "Adobe XD", level: 33 }
      ]
    },
    {
      section: language === 'es' ? 'Herramientas' : 'Tools',
      content: [
        { name: "VS Code", level: 64 },
        { name: "Git", level: 33 },
        { name: "Vim", level: 64 },
        { name: "LaTeX", level: 64 }
      ]
    }
  ]

  private getCertifications = (language: string) => [
    {
      title: language === 'es' ? 'Frontend y React' : 'Frontend and React',
      date: language === 'es' ? 'AGO 2021' : 'AUG 2021'
    }
  ]

  sendMsg(info: any): void {
    console.log(info);
  }

}
