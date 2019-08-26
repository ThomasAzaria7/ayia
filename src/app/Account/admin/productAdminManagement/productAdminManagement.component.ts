import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as Productactions from 'src/app/NgrxStore/productStateMan/products-Action.actions';
import * as ProductsReducer from 'src/app/NgrxStore/productStateMan/Products-Reducer.reducer';
import {select, Store, ActionsSubject} from '@ngrx/store';
import {firestore} from 'firebase'
import { AyiaProduct } from '../../../my-store/products/productModel';

@Component({
  selector: 'app-productAdminManagement',
  templateUrl: './productAdminManagement.component.html',
  styleUrls: ['./productAdminManagement.component.css']
})
export class ProductAdminManagementComponent implements OnInit {
  products:AyiaProduct  // model
  items
   db=firestore()




  addItem= new FormGroup({
    name: new FormControl('',Validators.required),
    desc: new FormControl('',Validators.required),
    pic: new FormControl('',Validators.required),
    cost: new FormControl('',Validators.required),
  })

  constructor(private productStore: Store<ProductsReducer.State>) {
    this.db.collection('AyiaProducts').doc('/items').get()
    .then( success=>{
      // console.log(success.data())
      this.items = success.data().items
      console.log(this.items);
      
    }
    ).catch(err=> console.log(err)) 
  }

  ngOnInit() {
    // this.productStore.pipe(select('ProductState')).subscribe(
    //   val=>{
    //     console.log(val);
    //     this.items=val.items
        
        
    //   }
    // )

  

    
  }
 
  createItem(){

    let productsObj

    let title = this.addItem.value.name;
    let productDes=this.addItem.value.desc;
    let displayImg=this.addItem.value.pic;
    // const otherImgs=this.addItem.value.name;
    let productCode= this.makeid(6);
    const cost=this.addItem.value.cost;
    const quantity=1;
    // const price=this.addItem.value.name;
    // const currency=this.addItem.value.name;
    // const tax=this.addItem.value.name;
   


    this.products = {
      name : title ,
      description:productDes,
      displayImg:displayImg,
      otherImgs:[''],
      code: productCode,
      cost:cost,
      quantity: quantity,
      price :cost * quantity,
      currency :'AUD',
      tax :'tax',
      
    }

    

    if(!this.items){
      productsObj={
        items:[this.products]
      }
    }else{
     this.items.push( this.products)
      
     productsObj={
       items:this.items
     }
    }

   

      {}

    this.db.collection('AyiaProducts').doc('/items').set(
      productsObj
     )

    // this.productStore.dispatch( new Productactions.addItem(this.products))

    console.log()

  }


   makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 

}
