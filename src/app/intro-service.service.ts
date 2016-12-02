import { Injectable } from '@angular/core';

import {IntroClass} from './intro-class';
import {INTRO} from './mock-intro-store';

@Injectable()
export class IntroServiceService {

  getIntro(): Promise<IntroClass> {
    return Promise.resolve(INTRO);
  }
}
