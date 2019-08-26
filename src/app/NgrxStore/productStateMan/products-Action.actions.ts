import { Action } from '@ngrx/store';
import { AyiaProduct } from '../../my-store/products/productModel';



// variable declaration

// 
export enum ActionTypes {
  addItem = 'add product',
  editItem = 'edit product',
//   addItem = 'add product',
  removeItem = '[productManagement] delete item',
  Reset = '[productManagement] delete all Reset',
}
 
export class addItem  implements Action {
  readonly type = ActionTypes.addItem;
  constructor(public payload: AyiaProduct) {}

}
export class editItem  implements Action {
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