import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectControllerComponent } from './defect-controller.component';

describe('DefectControllerComponent', () => {
  let component: DefectControllerComponent;
  let fixture: ComponentFixture<DefectControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefectControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
