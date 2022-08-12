import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteComponent } from './website.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "experience",
        component: ExperienceComponent
      },
      {
        path: "projects",
        component: ProjectsComponent
      },
      {
        path: "skills",
        component: SkillsComponent
      },
      {
        path: "certifications",
        component: CertificationsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WebsiteRoutingModule { }
