import { Component, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { I_Defect } from '../../interface/defect';

@Component({
  selector: 'app-defect-canvas',
  templateUrl: './defect-canvas.component.html',
  styleUrls: ['./defect-canvas.component.scss']
})
export class DefectCanvasComponent implements AfterViewInit {
  @Input() width!: number;
  @Input() height!: number;
  @Input() defects!: I_Defect[];
  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D;

  ngAfterViewInit(): void {
    this.initCanvas();
    this.defects.forEach(defect => {
      this.drawCircle(defect);
    });
  }

  initCanvas(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  drawCircle({x, y, severity}: I_Defect): void {
    this.ctx.beginPath();
    this.ctx.arc(x, y, 3, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = `rgba(255, 0, 0, ${this.toOpacity(severity)})`;
    this.ctx.fill();
  }

  toOpacity(severity: number): number {
    return 1 / 90 * severity - 1 / 9;
  }
}
