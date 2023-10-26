import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionDocComponent } from './version-doc.component';

describe('VersionDocComponent', () => {
  let component: VersionDocComponent;
  let fixture: ComponentFixture<VersionDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VersionDocComponent]
    });
    fixture = TestBed.createComponent(VersionDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
