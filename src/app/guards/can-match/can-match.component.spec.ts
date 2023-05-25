import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanMatchComponent } from './can-match.component';

describe('CanMatchComponent', () => {
  let component: CanMatchComponent;
  let fixture: ComponentFixture<CanMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanMatchComponent]
    });
    fixture = TestBed.createComponent(CanMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
