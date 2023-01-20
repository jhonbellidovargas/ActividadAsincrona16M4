import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PERUComponent } from './peru.component';

describe('PERUComponent', () => {
  let component: PERUComponent;
  let fixture: ComponentFixture<PERUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PERUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PERUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
