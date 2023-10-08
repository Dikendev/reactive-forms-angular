import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss'],
})
export class ViewPageComponent {
  @Input() data: any;

  constructor(private sharedService: SharedService, private router: Router) {}

  clickItem(item: any) {
    console.log('pegar cada item pelo id', item);
  }

  selectItem(item: any) {
    console.log('selectItem oiiiiiii');
    this.sharedService.selectItem(item);
  }
}
