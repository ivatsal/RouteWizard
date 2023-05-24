import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanResolveComponent } from './can-resolve.component';

describe('CanResolveComponent', () => {
  let component: CanResolveComponent;
  let fixture: ComponentFixture<CanResolveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanResolveComponent]
    });
    fixture = TestBed.createComponent(CanResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
