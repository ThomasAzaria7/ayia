import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import * as actions from 'src/app/NgrxStore/cartManagement/myAppActions.actions'
import * as fromRoot from 'src/app/NgrxStore/cartManagement/myAppStore.reducer'
import {select, Store} from '@ngrx/store';
import { Router, ActivatedRoute, Params } from '@angular/router';

//
import * as Productactions from 'src/app/NgrxStore/productStateMan/products-Action.actions';
import * as ProductsReducer from 'src/app/NgrxStore/productStateMan/Products-Reducer.reducer';
//

@Component({
  selector: 'app-ProductsPreview',
  templateUrl: './ProductsPreview.component.html',
  styleUrls: ['./ProductsPreview.component.css']
})
export class ProductsPreviewComponent implements OnInit,DoCheck {
  arrItems: any;

  imageUrls = [
    { url: 'https://wildxplora.firebaseapp.com/assets/pic/9.png', caption: 'The first slide', href: '#config' },
    { url: 'https://wildxplora.firebaseapp.com/assets/pic/9.png', clickAction: () => alert('custom click function') },
    { url: 'https://wildxplora.firebaseapp.com/assets/pic/9.png', caption: 'Apple TV', href: 'https://www.apple.com/' },
    { url: 'https://wildxplora.firebaseapp.com/assets/pic/9.png', backgroundSize: 'contain', backgroundPosition: 'center' }
  ];

  imageUrlArray=[
    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQoX1B1gqCYPq7LSPsPb7qYu1hW0CvC0BArfXnGNyF8f5pR4KOxgPVVJ-OHXf33MgWVjVWp2VSMMdVKuUt7ik_igelvW5WJedGIHMz6kq6NEVeWVsvXBj0YPw&usqp=CAc',
    'https://wildxplora.firebaseapp.com/assets/pic/9.png',
    'https://wildxplora.firebaseapp.com/assets/pic/9.png',
    'https://wildxplora.firebaseapp.com/assets/pic/9.png',
  ]

  card1={
    name:'wild face scrub',
    describtion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    coverImg:'https://s1.r29static.com//bin/shop/f2c/x/1468034/image.png',
    imgs:[
          'assets/product1.jpg',
          'assets/product2.jpg',
          'assets/product3.jpg',
          'assets/product4.jpg',
          'assets/product5.jpg',
        ],
    code:'012XX',
    price:10.95,
    setprice:10.95,
    quantity:1,
    currency: 'AUD',
    description: 'SHRT',
    tax: 0,
  }
  items
  Productcode
  currentProduct
  displayImg: string;
  added =false

  constructor( private store: Store<fromRoot.State>,private router:Router, private route :ActivatedRoute, private productStore: Store<ProductsReducer.State>) {
    //get cart data
    let retrievedObject = localStorage.getItem('cart');
    this.arrItems=JSON.parse(retrievedObject)
    //

    this.productStore.pipe(select('ProductState')).subscribe(
      val=>{
        this.items=val.items
      }
    )

    



   }

   ngDoCheck(){
     if(this.items){
       this.currentProduct = this.items.find( x=> this.Productcode == x.code )

     }

   }

  ngOnInit() {
    scroll(0,0)

    this.Productcode = this.route.snapshot.params['code']
    this.route.params.subscribe((data:Params)=>{
      this.Productcode= data['code']
    })

    setTimeout(()=>{
      if(this.items){
        this.currentProduct = this.items.find( x=> this.Productcode == x.code )
        this.displayImg= this.currentProduct.displayImg
        this.imageUrlArray.unshift(this.displayImg)
      }
    },2000)
  
    

  }

  changePic(i){
    this.displayImg= this.imageUrlArray[i]
  }
  buyItem1(){

    this.added=true

    let retrievedObject = localStorage.getItem('cart');
    this.arrItems=JSON.parse(retrievedObject)

    if(!this.arrItems){
      this.arrItems= [this.currentProduct]
    }else{
      this.arrItems.unshift(this.currentProduct)
    }

    localStorage.setItem('cart', JSON.stringify(this.arrItems))
    this.store.dispatch(new actions.addItem)
  }





}
