import { Component } from '@angular/core';
import { DefectService } from '../../service/defect.service';

@Component({
  selector: 'app-defect-controller',
  templateUrl: './defect-controller.component.html',
  styleUrls: ['./defect-controller.component.scss']
})
export class DefectControllerComponent {

  constructor(
    public defectService: DefectService
  ) {
  }

  formatLabel(value: number) {
    return value;
  }

  onSliderChange(): void {
    this.defectService.broadcastDefect({
      type: 'severity',
      payload: this.defectService.selectedDefect!
    });
  }
}
