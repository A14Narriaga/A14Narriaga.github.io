import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotComponent } from './containers/components/bot/bot.component';
import { HomeComponent } from './containers/page/home/home.component';
import { CardProjectComponent } from './containers/components/card-project/card-project.component';
import { CardCertificationComponent } from './containers/components/card-certification/card-certification.component';

@NgModule({
  declarations: [
    AppComponent,
    BotComponent,
    HomeComponent,
    CardProjectComponent,
    CardCertificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
