import { Component, OnInit } from '@angular/core';

import {IntroClass} from './intro-class';
import {IntroServiceService} from './intro-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  constructor(private introService: IntroServiceService) { }

  intro: IntroClass;
  title = 'Christopher Duarte';

  getIntro(): void {
    this.introService.getIntro().then(intro => this.intro = intro);
  }

  ngOnInit(): void {
    this.getIntro();
  }
}
