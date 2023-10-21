import { Component, OnInit } from '@angular/core';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-rxjs-basics-page',
  templateUrl: './rxjs-basics-page.component.html',
  styleUrls: ['./rxjs-basics-page.component.scss'],
})
export class RxjsBasicsPageComponent implements OnInit {
  clicks = fromEvent<PointerEvent>(document, 'click');

  // map this operator applies a projection to each value and emits that projection in the output Observable.
  positions = this.clicks.pipe(map((event) => event.clientX));

  // emit a constant value not matter the cause.
  greetings = this.clicks.pipe(map((data) => 'Parabéns'));

  ngOnInit(): void {
    this.positions.subscribe((x) => console.log(x));
    this.greetings.subscribe((x) => console.log(x));
  }
}
