import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-rxjs-basics-page',
  templateUrl: './rxjs-basics-page.component.html',
  styleUrls: ['./rxjs-basics-page.component.scss'],
})
export class RxjsBasicsPageComponent implements OnInit {
  ngOnInit(): void {
    this.positions.subscribe((x) => console.log(x));
  }
  clicks = fromEvent<PointerEvent>(document, 'click');
  positions = this.clicks.pipe(map((event) => event.clientX));
}
