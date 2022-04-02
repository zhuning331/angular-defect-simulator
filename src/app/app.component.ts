import { Component } from '@angular/core';
import { DefectService } from './service/defect.service';
import { I_Defect } from './interface/defect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  defects: I_Defect[] = [];

  constructor(
    public defectService: DefectService
  ) {
    this.defectService.getDefects().subscribe((res: I_Defect[]) => (this.defects = res));
  }
}
