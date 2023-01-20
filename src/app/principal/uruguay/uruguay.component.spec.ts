import { ComponentFixture, TestBed } from '@angular/core/testing';

import { URUGUAYComponent } from './uruguay.component';

describe('URUGUAYComponent', () => {
  let component: URUGUAYComponent;
  let fixture: ComponentFixture<URUGUAYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ URUGUAYComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(URUGUAYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
