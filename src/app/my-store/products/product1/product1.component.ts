import { Component, OnInit } from '@angular/core';
import * as actions from 'src/app/NgrxStore/cartManagement/myAppActions.actions'
import * as fromRoot from 'src/app/NgrxStore/cartManagement/myAppStore.reducer'
import {select, Store} from '@ngrx/store';
import { Router, ActivatedRoute, Params} from '@angular/router';

import * as Productactions from 'src/app/NgrxStore/productStateMan/products-Action.actions';
import * as ProductsReducer from 'src/app/NgrxStore/productStateMan/Products-Reducer.reducer';
import {firestore} from 'firebase'

@Component({
  selector: 'app-product1', 
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
  items
  db=firestore()

  constructor( private store: Store<fromRoot.State>,private router:Router, private route:ActivatedRoute,private productStore: Store<ProductsReducer.State>) { 
        this.productStore.pipe(select('ProductState')).subscribe(
          val=>{
              this.items=val.items
          }
        )
  }

  ngOnInit() {

  }

  ProductPreview(i){
    this.router.navigate(['/online-store/'+ this.items[i].code])
   
  }

}
