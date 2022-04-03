import { Component, OnInit, Input, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { of, Observable, Subscription } from 'rxjs';
import { CoreShapeComponent } from 'ng2-konva';
import { I_Defect } from '../../interface/defect';
import { I_Panel } from '../../interface/panel';
import { I_MsgContent } from '../../interface/msg-content';
import { DefectService } from '../../service/defect.service';

@Component({
  selector: 'app-defect-canvas',
  templateUrl: './defect-canvas.component.html',
  styleUrls: ['./defect-canvas.component.scss']
})
export class DefectCanvasComponent implements OnInit, OnDestroy {
  @Input() width!: number;
  @Input() height!: number;
  @Input() defects!: I_Defect[];
  @ViewChild('layer') layer!: CoreShapeComponent;

  configStage!: Observable<I_Panel>;
  configCircles!: Observable<any>[];
  subscription?: Subscription;

  constructor(
    private elementRef: ElementRef,
    public defectService: DefectService
  ) {
  }

  ngOnInit(): void {
    this.configStage = of({
      width: this.width,
      height: this.height
    });

    this.configCircles = this.defects.map(defect => {
      return of({
        defect,
        uuid: defect.uuid,
        x: defect.x,
        y: defect.y,
        radius: 4,
        fill: 'red',
        opacity: this.toOpacity(defect.severity)
      });
    });

    this.subscription = this.defectService.getDefectObservable().subscribe((msgContent: I_MsgContent) => {
      switch (msgContent.type) {
        case 'select':
          this.layer.shapes.forEach(shape => {
            const isEnter = shape.getConfig().uuid === msgContent.payload.uuid ? true : false;
            this.toggleCircle(shape, isEnter);
          });
          break;
        case 'severity':
          this.setSeverity(msgContent.payload);
          break;
        case 'hover':
          this.layer.shapes.forEach(shape => {
            const isEnter = shape.getConfig().uuid === msgContent.payload.uuid ? true : false;
            this.onHoverCircle(shape, isEnter);
          });
          break;
        default:
          break;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription!.unsubscribe();
  }

  setSeverity(defect: I_Defect): void {
    const shape = this.layer.shapes.find(shape => shape.getConfig().uuid === defect.uuid)!.getStage();
    shape.to({
      opacity: this.toOpacity(defect.severity)
    });
  }

  onSelectCircle(circle: CoreShapeComponent): void {
    this.defectService.selectedDefect = circle.getConfig().defect;
    this.defectService.broadcastDefect({
      type: 'select',
      payload: this.defectService.selectedDefect!
    });
  }

  onHoverCircle(circle: CoreShapeComponent, isEnter: boolean): void {
    if (circle.getConfig().uuid !== this.defectService.selectedDefect?.uuid) {
      this.toggleCircle(circle, isEnter);
    }
    this.elementRef.nativeElement.querySelector('canvas').style.cursor = isEnter ? 'pointer' : 'default';
  }

  toggleCircle(circle: CoreShapeComponent, isEnter: boolean): void {
    circle.getStage().to({
      duration: 0.1,
      scaleX: isEnter ? 2 : 1,
      scaleY: isEnter ? 2 : 1
    });
  }

  toOpacity(severity: number): number {
    return 1 / 90 * severity - 1 / 9;
  }
}
