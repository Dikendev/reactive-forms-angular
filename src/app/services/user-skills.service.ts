import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserSkillsService {
  constructor() {}

  getSkills() {
    return of([
      'Java',
      'SpringBoot',
      'Javascript',
      'Typescript',
      'Angular',
      'NestJs',
    ]).pipe(delay(1000));
  }
}
