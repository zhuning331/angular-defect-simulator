import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { I_Defect } from '../interface/defect';
import { I_MsgContent } from '../interface/msg-content';

@Injectable({
  providedIn: 'root'
})
export class DefectService {
  selectedDefect?: I_Defect;
  defectSubject = new Subject<I_MsgContent>();

  constructor() { }

  getDefects(width: number, height: number): Observable<I_Defect[]> {
    const defects: I_Defect[] = [];
    for (let index = 0; index < 100; index++) {
      const uuid = index.toString();
      const x = this.getRandom(0, width);
      const y = this.getRandom(0, height);
      const severity = this.getRandom(10, 100);
      defects.push({uuid, x, y, severity});
    }
    return of(defects);
  }

  getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  broadcastDefect(msgContent: I_MsgContent) {
    this.defectSubject.next(msgContent);
  }

  getDefectObservable() {
    return this.defectSubject.asObservable();
  }
}
