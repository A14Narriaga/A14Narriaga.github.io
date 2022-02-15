import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  getInfo = () => ({
    hello: 'Hola, mi nombre es',
    name: 'ALAN',
    lastname: 'ARRIAGA',
    about: 'Ingeniero en sistemas computacionales, especializado en construir y ocasionalmente diseñar excepcionales experiencias digitales. Buscando crear la mejor versión de mí, amante de aprender, compartir conocimiento y dejar huella.'
  })

  getSkills = () => [
    {
      section: "Fontend",
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
      section: "Backend",
      content: [
        { name: "NodeJS", level: 10 },
        { name: "PHP", level: 10 }
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
      section: "Design",
      content: [
        { name: "Figma", level: 64 },
        { name: "Adobe XD", level: 33 }
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
    }
  ];

  getProjects = () => [
    {
      year: '2022',
      link: 'https://a14narriaga.github.io/langtons-ant',
      repo: 'https://github.com/A14Narriaga/langtons-ant',
      title: 'Hormiga de Langton',
      description: 'Simulación creada durante mi último semestre en la carrera usando React para manejar la interfaz gráfica, así como Rust del lado del Backend implementando WebAssembly.para así dar vida a esta interesante aplicación.',
      tools: ['HTML5', 'React', 'SASS', 'TypeScript']
    },
    {
      year: '2021',
      link: 'https://a14narriaga.github.io/to-do',
      repo: 'https://github.com/A14Narriaga/to-do',
      title: 'Lista de tareas',
      description: 'Interesante aplicacion que desarrolle para gestionar un CRUD de tareas, a manera de practica implementando useState and useEffect de React.',
      tools: ['HTML5', 'React', 'SASS', 'TypeScript']
    }
  ];

  getCertifications = () => [
    {
      title: 'Frontend y React',
      date: 'AGO 2021'
    }
  ];

  getExperience = () => [
    {
      company: 'LALEO',
      position: 'Desarrollador Fullstack',
      date: 'AGO 2021 - Presente',
      learning: [
        'Escribiendo codigo moderno y mantenible para diversos proyectos internos enfocados a consumidores asi como brindando apoyo en el area de diseño.',
        'Trabajando con una variedad de diferentes lenguajes y frameworks como JavaScript, TypeScript, React, Angular, Materialize, etc, asi como MySQL y Redis como manejadores de base de datos.',
        'Estableciendo una comunicacion con equipos multidisiplinarios como diseñadores e ingenieros.',
        'Implementando Jira y Assana para gestionar proyectos, usando la metodologia agil SCRUM.'
      ]
    }
  ]

  sendMsg(info: any): void {
    console.log(info);
  }

}
