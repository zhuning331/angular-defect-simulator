import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-defect-canvas',
  templateUrl: './defect-canvas.component.html',
  styleUrls: ['./defect-canvas.component.scss']
})
export class DefectCanvasComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  private canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(0, 0, 600, 300);
  }

}
