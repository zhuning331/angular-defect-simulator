import { Component, Input } from '@angular/core';
import { DefectService } from '../../service/defect.service';
import { I_Defect } from '../../interface/defect';

@Component({
  selector: 'app-defect-list',
  templateUrl: './defect-list.component.html',
  styleUrls: ['./defect-list.component.scss']
})
export class DefectListComponent {
  @Input() defects!: I_Defect[];
  displayedColumns: string[] = ['uuid', 'x', 'y'];
  clickedRows = new Set<I_Defect>();

  constructor(
    public defectService: DefectService
  ) {
  }

  onSelectRow(row: I_Defect): void {
    this.defectService.selectedDefect = row;
    this.defectService.broadcastDefect({
      type: 'select',
      payload: this.defectService.selectedDefect
    });
  }

  onHoverRow(row: I_Defect): void {
    this.defectService.broadcastDefect({
      type: 'hover',
      payload: row
    });
  }
}
