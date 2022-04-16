import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  private language = this.getSessionItem('language', 'es');
  private loading = new BehaviorSubject<boolean>(false);
  loading$ = this.loading.asObservable();
  private data = new BehaviorSubject<any>([]);
  data$ = this.data.asObservable();

  private getNavOpts = () =>
    this.language === 'es'
      ? [
        { key: 'experience', title: 'Experiencia' },
        { key: 'projects', title: 'Proyectos' },
        { key: 'skills', title: 'Habilidades' },
        { key: 'certifications', title: 'Certificaciones' },
        { key: 'blogs', title: 'Blogs' }
      ] : [
        { key: 'experience', title: 'Experience' },
        { key: 'projects', title: 'Projects' },
        { key: 'skills', title: 'Skills' },
        { key: 'certifications', title: 'Certifications' },
        { key: 'blogs', title: 'Blogs' }
      ];

  private getInfo = () => ({
    hello: this.language === 'es' ? 'Hola, mi nombre es' : 'Hi, my name is',
    name: 'ALAN',
    lastname: 'ARRIAGA',
    about: this.language === 'es'
      ? 'Ingeniero en sistemas computacionales, especializado en construir y ocasionalmente diseñar excepcionales experiencias digitales. Buscando crear la mejor versión de mí, amante de aprender, compartir conocimiento y dejar huella.'
      : 'I´m computer systems engineer specializing in building and occasionally designing exceptional digital experiences. Seeking to create the best version of myself, a lover of learning, sharing knowledge and leaving a mark.'
  })

  private getSkills = () => ({
    title: this.language === 'es' ? 'Habilidades' : 'Skills',
    data: [
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
      // {
      //   section: this.language === 'es' ? 'Bases de datos' : 'Databases',
      //   content: [
      //     { name: "MySQL", level: 64 },
      //     { name: "Redis", level: 33 }
      //   ]
      // },
      // {
      //   section: this.language === 'es' ? 'Diseño' : 'Design',
      //   content: [
      //     { name: "Figma", level: 64 },
      //     { name: "Adobe XD", level: 33 }
      //   ]
      // },
      {
        section: this.language === 'es' ? 'Herramientas' : 'Tools',
        content: [
          { name: "VS Code", level: 64 },
          { name: "Git", level: 33 },
          { name: "Vim", level: 64 },
          { name: "LaTeX", level: 64 }
        ]
      }
    ]
  })

  private getProjects = () => ({
    title: this.language === 'es' ? 'Proyectos' : 'Projects',
    data: [
      {
        year: '2022',
        link: 'https://a14narriaga.github.io/langtons-ant',
        repo: 'https://github.com/A14Narriaga/langtons-ant',
        title: this.language === 'es' ? 'Hormiga de Langton' : 'Langton´s ant',
        description: this.language === 'es'
          ? 'Simulación creada durante mi último semestre en la carrera usando React para manejar la interfaz gráfica, así como Rust del lado del Backend implementando WebAssembly.para así dar vida a esta interesante aplicación.'
          : 'Simulation created during my last semester of college using React to manage the graphical interface, as well as Rust on the Backend side implementing WebAssembly, in order to bring this interesting application to life.',
        tools: ['React', 'HTML5', 'SASS', 'Rust', 'TypeScript', 'WebAssembly']
      },
      {
        year: '2021',
        link: 'https://a14narriaga.github.io/to-do',
        repo: 'https://github.com/A14Narriaga/to-do',
        title: this.language === 'es' ? 'Lista de tareas' : 'Todo list',
        description: this.language === 'es'
          ? 'Interesante aplicacion que desarrolle para gestionar un CRUD de tareas, a manera de practica implementando useState and useEffect de React.'
          : 'Interesting application that I developed to manage a CRUD of tasks, as a practice by implementing React´s useState and useEffect.',
        tools: ['HTML5', 'React', 'SASS', 'TypeScript']
      }
    ]
  })

  private getCertifications = () => ({
    title: this.language === 'es' ? 'Certificaciones' : 'Certifications',
    data: [
      {
        title: this.language === 'es' ? 'Frontend y React' : 'Frontend and React',
        date: this.language === 'es' ? 'AGO 2021' : 'AUG 2021'
      }
    ]
  });

  private getExperiences = () => ({
    title: this.language === 'es' ? 'Experiencia' : 'Experience',
    data: [
      {
        link: 'https://laleo.com',
        company: 'LALEO',
        position: this.language === 'es' ? 'Desarrollador Fullstack' : 'Fullstack Developer',
        date: this.language === 'es' ? 'AGO 2021 - Presente' : 'AUG 2021 - Present',
        learning: this.language === 'es'
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
  });

  sendData(): void {
    setTimeout(() => {
      this.data.next([
        this.getNavOpts(),
        this.getInfo(),
        this.getSkills(),
        this.getProjects(),
        this.getCertifications(),
        this.getExperiences()
      ]);
      this.loading.next(false);
    }, 2500);
  }

  getData(): void {
    this.sendData();
    this.loading.next(true);
  }

  changeTheme = (): string => {
    return this.setSessionItem('theme', this.getTheme() === 'dark' ? 'light' : 'dark');
  }

  getTheme(): string {
    const currentHour = new Date().getHours();
    return this.getSessionItem('theme', (currentHour >= 7 && currentHour <= 19) ? 'light' : 'dark');
  }

  changeLanguaje = (): string => {
    this.language = this.setSessionItem('language', this.language === 'es' ? 'en' : 'es');
    this.data.next([
      this.getNavOpts(),
      this.getInfo(),
      this.getSkills(),
      this.getProjects(),
      this.getCertifications(),
      this.getExperiences()
    ]);
    return this.language;
  }

  sendMsg(info: any): void {
    console.log(info);
  }

  setSessionItem(key: string, value: string): string {
    sessionStorage.setItem(key, value);
    return value;
  }

  getSessionItem(key: string, init: string): string {
    const value = sessionStorage.getItem(key);
    return value === null ? init : value;
  }

}
