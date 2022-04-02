import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectCanvasComponent } from './defect-canvas.component';

describe('DefectCanvasComponent', () => {
  let component: DefectCanvasComponent;
  let fixture: ComponentFixture<DefectCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefectCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
