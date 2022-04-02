import { Component, OnInit, Input } from '@angular/core';
import { I_Defect } from '../../interface/defect';

@Component({
  selector: 'app-defect-list',
  templateUrl: './defect-list.component.html',
  styleUrls: ['./defect-list.component.scss']
})
export class DefectListComponent implements OnInit {
  @Input() defects!: I_Defect[];
  displayedColumns: string[] = ['uuid', 'x', 'y'];
  clickedRows = new Set<I_Defect>();

  ngOnInit(): void {
  }
}
