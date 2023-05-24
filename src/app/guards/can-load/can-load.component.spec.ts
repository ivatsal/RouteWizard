import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanLoadComponent } from './can-load.component';

describe('CanLoadComponent', () => {
  let component: CanLoadComponent;
  let fixture: ComponentFixture<CanLoadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanLoadComponent]
    });
    fixture = TestBed.createComponent(CanLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
