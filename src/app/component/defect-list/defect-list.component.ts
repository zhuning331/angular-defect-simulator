import { Component, OnInit } from '@angular/core';

interface PeriodicElement {
  index: number;
  x: number;
  y: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {index: 1, x: 1.0079, y: 'H'},
  {index: 2, x: 4.0026, y: 'He'},
  {index: 3, x: 6.941, y: 'Li'},
  {index: 4, x: 9.0122, y: 'Be'},
  {index: 5, x: 10.811, y: 'B'},
  {index: 6, x: 12.0107, y: 'C'},
  {index: 7, x: 14.0067, y: 'N'},
  {index: 8, x: 15.9994, y: 'O'},
  {index: 9, x: 18.9984, y: 'F'},
  {index: 10, x: 20.1797, y: 'Ne'},
];

@Component({
  selector: 'app-defect-list',
  templateUrl: './defect-list.component.html',
  styleUrls: ['./defect-list.component.scss']
})
export class DefectListComponent implements OnInit {
  displayedColumns: string[] = ['index', 'x', 'y'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  constructor() { }

  ngOnInit(): void {
  }

}
