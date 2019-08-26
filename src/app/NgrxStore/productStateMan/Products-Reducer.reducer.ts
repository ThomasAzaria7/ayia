 import * as productAction from './products-Action.actions';
import { state } from '@angular/animations';
import { firestore, initializeApp} from 'firebase';

    const firebaseConfig = {
        apiKey: "AIzaSyBU4tXjVTIbHlpsWWYFYe-o-5mXiuhMGA8",
        authDomain: "ayia-online.firebaseapp.com",
        databaseURL: "https://ayia-online.firebaseio.com",
        projectId: "ayia-online",
        storageBucket: "ayia-online.appspot.com",
        messagingSenderId: "733519640929",
        appId: "1:733519640929:web:4d433a128f29e5d3"
    };
    initializeApp(firebaseConfig);


let items

    firestore().collection('AyiaProducts').doc('/items').get()
    .then( success=>{
       items = success.data().items   // gets items and assigns to variable
    }).catch(err=>console.log(err)).finally(()=>{
        return items
    })


    //
    // function display (){
    //     setTimeout(()=>{
    //     },2000)
    // }
    // display ()
    //

export interface State{
    items:any
    //
}

  // initial state
export const initialState:State ={
    items: null
}

//reducer functoion 
export function ProductsReducer(
    state= initialState,
    action:productAction.ActionsUnion

): State{
    switch (action.type) {
        case(productAction.ActionTypes.addItem):{
                    state.items=action.payload 
            return {
                ...state,
            };
        }
        case(productAction.ActionTypes.removeItem):{

            return{

                ...state,
            }
        }

        default: {
            return state;
          }

    }
}