import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushChildComponent } from './onpush-child.component';

describe('OnpushChildComponent', () => {
  let component: OnpushChildComponent;
  let fixture: ComponentFixture<OnpushChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnpushChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnpushChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
