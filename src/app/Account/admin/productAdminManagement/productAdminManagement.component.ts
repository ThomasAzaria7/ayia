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
  editData
  edit =false;
   db=firestore()

   //
  nameEdit ='value'
  itemIndex
  newPrice:number=0

   //




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

    let productprice=this.addItem.value.cost.toFixed(2)
    console.log(productprice);
    

    let title = this.addItem.value.name;
    let productDes=this.addItem.value.desc;
    let displayImg=this.addItem.value.pic;
    // const otherImgs=this.addItem.value.name;
    let productCode= this.makeid(6);
    const cost=productprice;
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
      price :cost,
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

  deleteItem(i){

    this.items.splice(i,1)
    this.db.collection('AyiaProducts').doc('/items').set({items:this.items})
  
  }

  editItem(i){
    this.itemIndex=i
   this.editData= this.items.splice(i,1)
    this.editData=this.editData[0]
    this.nameEdit=this.editData.name

    console.log(this.editData);
    this.edit=true;
    
    // this.addItem.value.name= this.editData.name
    

  }

  saveEdit(name,desc,img,price,position){
    console.log(name.value);

    let cost =parseInt( price.value).toFixed(2)

    console.log(cost);

    console.log(this.newPrice);
    
    



    this.products = {
      name : name.value ,
      description:desc.value,
      displayImg:img.value,
      otherImgs:[''],
      code: this.makeid(6),
      cost:price.value,
      quantity: 1,
      price :this.newPrice,
      currency :'AUD',
      tax :'tax',
      
    }

    const i= position.value -1

    console.log(i);
    

    if(i !=-1){
      this.items.splice(i,0,this.products)

    }else{
      this.items.splice(this.itemIndex,0,this.products)

    }
    this.db.collection('AyiaProducts').doc('/items').set({items:this.items})
    this.edit=false
    
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
