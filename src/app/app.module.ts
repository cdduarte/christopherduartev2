import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import {IntroServiceService} from './intro-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    NavbarComponentComponent,
    WelcomeComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [IntroServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
