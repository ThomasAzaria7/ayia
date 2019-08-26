import { Component, OnInit, HostListener } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { APPServiceService } from '../APP-Service.service';
import {auth, firestore} from 'firebase'

import * as Productactions from 'src/app/NgrxStore/productStateMan/products-Action.actions';
import * as ProductsReducer from 'src/app/NgrxStore/productStateMan/Products-Reducer.reducer';

import * as actions from '../NgrxStore/cartManagement/myAppActions.actions'
import * as fromRoot from '../NgrxStore/cartManagement/myAppStore.reducer'
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers:[CurrencyPipe],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        'opacity':'0.9',
        height:'100vh',
        width:'500px',
        transform:'translateX(0px) translateY(8vh)'

      })),
      state('closed', style({
        'opacity':'0',
        height:'100vh',
        transform:'translateX(-200px) translateY(8vh)'
      })),
      transition('open => closed', [
        
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],

})
export class NavigationComponent implements OnInit {
  position
  showHeader2=false;
  arrItems: any;
  totalCost:number=0
  getCurrencyRates
  money: number =30.95
  currencyVal:string
  total 
  convertedMoney
  isOpen = false;
  cartNumber=0;
  showNav= false
  displayName=''
  items: any;
  auth

 
  constructor(private currencypip: CurrencyPipe, private cart: Store<fromRoot.State>, private http:HttpClient, private productStore: Store<ProductsReducer.State>) {
    // firebase database get items
    firestore().collection('AyiaProducts').doc('/items').get()
    .then( success=>{
     this.items = success.data().items   // gets items and assigns to variable
        this.productStore.dispatch(new Productactions.addItem(this.items))  // send items to reducer from database
      //  console.log(this.items);
    }).catch(err=>console.log(err));
    //
    let Localtotal

    //get cart items
    this.cart.pipe(select('game')).subscribe(
      val=>{
        this.cartNumber= val.myCartItems.length // keeps track of how many items in cart
      }
    )
    //end of cart get
    
    //

    

    //
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    // console.log(window.scrollY)
      this.position = window.scrollY
          if(this.position >=50){
            this.showHeader2=true;
            this.getHeight('500px')
            // console.log('beyong fifty')
          }else{
            this.showHeader2=false
            this.getHeight('600px')

          }


  }
  toggle() {
    this.isOpen = !this.isOpen;
    this.showNav == true ? this.showNav = false : this.showNav = true;
  }


  currentCurrency(value){
    console.log(value.value)
    this.currencyVal=value.value

    // console.log( this.currencypip.transform(this.money, value.value))
    this.http.get('https://api.exchangeratesapi.io/latest?base=USD').subscribe(
      (val)=>{

        this.getCurrencyRates = val['rates'][this.currencyVal]
       const moneyChange = this.totalCost * this.getCurrencyRates.toFixed(2)
        // return  this.totalCost= this.totalCost.toFixed(2)
        this.convertedMoney = moneyChange.toFixed(2)
      // console.log(val['rates'][this.currencyVal])
      // console.log(val)
      }
    )
    // this.total= this.currencypip.transform(this.money, value.value)

  }

  getHeight(val:string){
    let height = val
    return height
  }

  ngOnInit() {

    auth().onAuthStateChanged((user)=>{
        if (user){
          this.displayName=user.displayName;
          this.auth=true
        }else
        {
          this.displayName=''

        }
    

 
    })

    //


    

 
    



  }


  logout(){
    auth().signOut()
  }







}

