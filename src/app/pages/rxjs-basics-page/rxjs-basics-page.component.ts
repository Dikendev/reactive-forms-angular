import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-rxjs-basics-page',
  templateUrl: './rxjs-basics-page.component.html',
  styleUrls: ['./rxjs-basics-page.component.css'],
})
export class RxjsBasicsPageComponent implements OnInit {
  observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });

  ngOnInit(): void {
    console.log('just before subscribe');
    this.observable.subscribe({
      next(x) {
        console.log('got value:', x);
      },
      error(err) {
        console.log('something wrong occurred:', err);
      },
      complete() {
        console.log('done');
      },
    });
    console.log('just after subscribe');
  }
  isDescriptionVisible = true;

  showDescription() {
    this.isDescriptionVisible = true;
    this.isDescriptionVisible2 = false;
  }

  // hideDescription() {
  //   this.isDescriptionVisible = false;
  // }

  isDescriptionVisible2 = false;

  showDescription2() {
    this.isDescriptionVisible2 = true;
    this.isDescriptionVisible = false;
  }

  // hideDescription2() {
  //   this.isDescriptionVisible2 = false;
  // }
}
