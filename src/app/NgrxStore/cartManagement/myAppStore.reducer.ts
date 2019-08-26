// import * as Scoreboard from '../NgrxStore/cartManagement/myAppActions.actions';
import * as Scoreboard from '../cartManagement/myAppActions.actions';

let retrievedObject = localStorage.getItem('cart');
let arrItems=JSON.parse(retrievedObject)


// let totalCost = 0;
// for (let i =0; i< arrItems.length; i++){
//     this.totalCost += arrItems[i].price;
// }
// this.totalCost = this.totalCost.toFixed(2)

function getTotalCost(){
  let totalCost = 0;

    if(arrItems){
      for (let i =0; i< arrItems.length; i++){
        totalCost += arrItems[i].cost;
    }
    return parseFloat( totalCost.toFixed(2))

    }else{
      return totalCost;
    }
 

}

// state definition
export interface State {
    myCartItems: number;
    total: number;
  }


  // initial state
  export const initialState: State = {
    myCartItems: arrItems,
    total:0,
  };

  

  //reducer function
export function scoreboardReducer(
    state = initialState,
    action: Scoreboard.ActionsUnion
  ): State {
    switch (action.type) {
      case Scoreboard.ActionTypes.addItem: {
        let retrievedObject = localStorage.getItem('cart');
        let arrItems=JSON.parse(retrievedObject)
        //
       
        //
        return {
          ...state,
          myCartItems: arrItems,
        };
      }
   
      case Scoreboard.ActionTypes.removeItem: {
        return {
          ...state,
    
            myCartItems: this.arrItems,
        };
      }
   
      case Scoreboard.ActionTypes.Reset: {
        // return action.payload; // typed to { home: number, away: number }
      }
   
      default: {
        return state;
      }
    }
  }