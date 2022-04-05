import { Component } from '@angular/core';
import { DefectService } from './service/defect.service';
import { I_Defect } from './interface/defect';
import { I_Panel } from './interface/panel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  panel: I_Panel = {width: 600, height: 300};
  defects: I_Defect[] = [];

  constructor(
    private defectService: DefectService
  ) {
    this.defectService.getDefects(this.panel.width, this.panel.height)
      .subscribe((res: I_Defect[]) => (this.defects = res));
  }
}
