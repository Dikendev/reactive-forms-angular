import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  selectedItem: any;
  paramInputs: FormGroup;

  constructor(
    private sharedService: SharedService,
    private _formBuilder: FormBuilder
  ) {
    this.paramInputs = this._formBuilder.group({
      serialNumber: [this.selectedItem, Validators.required],
    });
  }

  ngOnInit(): void {
    this.sharedService.selectedItem$.subscribe((item) => {
      this.paramInputs.controls['serialNumber'].setValue(item?.id);
      this.selectedItem = item;
    });
  }
}
