import { Component } from '@angular/core';

import {IntroClass} from '../intro-class';
//import {IntroServiceService} from '../intro-service.service';
import {INTRO} from '../mock-intro-store';

@Component({
  selector: 'app-welcome-component',
  templateUrl: './welcome-component.component.html',
  styleUrls: ['./welcome-component.component.css']
})
export class WelcomeComponentComponent {
  //constructor(private introService: IntroServiceService) { }
  intro = INTRO;

  // ngOnInit(): void {
  //   this.introService.getIntro().then(intro => this.intro = intro);
  // }
}
