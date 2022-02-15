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
import { IconAngularComponent } from './containers/icons/IconAngular.component';
import { IconReactComponent } from './containers/icons/IconReact.component';
import { IconJavaScriptComponent } from './containers/icons/IconJavaScript.component';
import { IconTypeScriptComponent } from './containers/icons/IconTypeScript.component';
import { IconHTML5Component } from './containers/icons/IconHTML5.component';
import { IconPugComponent } from './containers/icons/IconPug.component';
import { IconCSS3Component } from './containers/icons/IconCSS3.component';
import { IconSASSComponent } from './containers/icons/IconSASS.component';
import { IconNodeJSComponent } from './containers/icons/IconNodeJS.component';
import { IconPHPComponent } from './containers/icons/IconPHP.component';
import { IconMySQLComponent } from './containers/icons/IconMySQL.component';
import { IconRedisComponent } from './containers/icons/IconRedis.component';
import { IconFigmaComponent } from './containers/icons/IconFigma.component';
import { IconAdobeXDComponent } from './containers/icons/IconAdobeXD.component';
import { IconVSCodeComponent } from './containers/icons/IconVSCode.component';
import { IconGitComponent } from './containers/icons/IconGit.component';
import { IconVimComponent } from './containers/icons/IconVim.component';
import { IconLaTeXComponent } from './containers/icons/IconLatex.component';

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
    IconAngularComponent,
    IconReactComponent,
    IconJavaScriptComponent,
    IconTypeScriptComponent,
    IconHTML5Component,
    IconPugComponent,
    IconCSS3Component,
    IconSASSComponent,
    IconNodeJSComponent,
    IconPHPComponent,
    IconMySQLComponent,
    IconRedisComponent,
    IconFigmaComponent,
    IconAdobeXDComponent,
    IconVSCodeComponent,
    IconGitComponent,
    IconVimComponent,
    IconLaTeXComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
