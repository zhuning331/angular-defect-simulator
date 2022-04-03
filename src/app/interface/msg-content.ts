import { I_Defect } from './defect';

export interface I_MsgContent {
  type: 'select' | 'severity' | 'hover',
  payload: I_Defect
}
