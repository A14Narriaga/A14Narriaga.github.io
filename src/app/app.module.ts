import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotComponent } from './containers/components/bot/bot.component';
import { HomeComponent } from './containers/pages/home/home.component';
import { CardProjectComponent } from './containers/components/card-project/card-project.component';
import { CardCertificationComponent } from './containers/components/card-certification/card-certification.component';
import { LoaderComponent } from './containers/components/loader/loader.component';
import { SkillComponent } from './containers/components/skill/skill.component';
import { CardExperienceComponent } from './containers/components/card-experience/card-experience.component';
import { CardBlogComponent } from './containers/components/card-blog/card-blog.component';
import { CodeComponent } from './containers/components/code/code.component';
import { NavbarComponent } from './containers/components/navbar/navbar.component';
import { ProfilePictureComponent } from './containers/components/profile-picture/profile-picture.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from './icons/icons.module';
import { SkillOrbitComponent } from './containers/components/skill-orbit/skill-orbit.component';

@NgModule({
  declarations: [
    AppComponent,
    BotComponent,
    HomeComponent,
    CardProjectComponent,
    CardCertificationComponent,
    LoaderComponent,
    SkillComponent,
    CardExperienceComponent,
    CardBlogComponent,
    CodeComponent,
    NavbarComponent,
    ProfilePictureComponent,
    SkillOrbitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
