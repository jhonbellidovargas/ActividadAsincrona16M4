import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHILEComponent } from './chile.component';

describe('CHILEComponent', () => {
  let component: CHILEComponent;
  let fixture: ComponentFixture<CHILEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CHILEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CHILEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
