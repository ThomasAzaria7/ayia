import { Action } from '@ngrx/store';
 
export enum ActionTypes {
  addItem = '[Scoreboard Page] Home Score',
  removeItem = '[Scoreboard Page] Away Score',
  Reset = '[Scoreboard Page] Score Reset',
}
 
export class addItem  implements Action {
  readonly type = ActionTypes.addItem;
}
 
export class removeItem implements Action {
  readonly type = ActionTypes.removeItem;
}
 
export class Reset implements Action {
  readonly type = ActionTypes.Reset;
 
  constructor(public payload: { home: number; away: number }) {}
}
 
export type ActionsUnion = addItem | removeItem | Reset;