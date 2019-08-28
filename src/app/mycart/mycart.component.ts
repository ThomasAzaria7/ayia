import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import * as actions from '../NgrxStore/cartManagement/myAppActions.actions'
import * as fromRoot from '../NgrxStore/cartManagement/myAppStore.reducer'
import {select, Store} from '@ngrx/store';
//
import * as Productactions from 'src/app/NgrxStore/productStateMan/products-Action.actions';
import * as ProductsReducer from 'src/app/NgrxStore/productStateMan/Products-Reducer.reducer';
//

import {Observable} from 'rxjs';

import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  public payPalConfig: PayPalConfig;

  
  a: number = 0.259;
  b: number = 1.3495;
  arrItems=[]
  totalCost
  currency='AUD'

  checkoutItems= [

  ]

  scoreboard: Observable<any[]>;
  items: any;

  constructor( private store: Store<fromRoot.State>, private productStore: Store<ProductsReducer.State>, private http:HttpClient) {
   
  
  
    
      this.getTotal()
      this.initConfig();

   } //end of constructor function






  ngOnInit() {
    console.log(this.arrItems);
    
  }

  removeProduct(i){
    


    this.arrItems.splice(i,1)
    this.checkoutItems.splice(i,1)


    localStorage.setItem('cart', JSON.stringify(this.arrItems))
    this.store.dispatch(new actions.addItem)
    // this.getTotal()

    // this.addToCheckout()

    this.initConfig();





  }

 
  private initConfig(): void {

    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'AXuPtpHxHC5om42ZSfcurv2t5MoUcL0T1KFlntX9qcMrjN_LVs2gRkfmRe6_9CH3AEz4v7Ma_B8ltSd6',
        // production:''
      },
      button: {
        label: 'pay',
        shape:'rect',
        size:'responsive',
        color:'silver'
      },
      onPaymentComplete: (data, actions) => {
        const token = data.paymentToken
        const id = data.orderID
        const payerId= data.payerID
        console.log(data)
        console.log(data.orderID)
        console.log(actions)
        

        const mailOptions = {
          from: 'thomas.azaria7@gmail.com', // sender address
          to: 'yungblackhumbl3@gmail.com',  // list of receivers
          subject: 'welcome to Ayia boutique', // Subject line
          html:
           `
           <div style="display: grid; grid-template-columns: auto auto; justify-content: center; grid-gap: 10px; margin:50px 0" >
             
              <img width="200px"  height="300px" style="object-fit: cover; " src="https://images.pexels.com/photos/2101817/pexels-photo-2101817.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
              <div style="border: 2px solid rgb(167, 10, 10); padding: 10px; width:500px">
                    <p> hello   </P>
                    <p> we are glad that you have joining us. </p>
                    
                    <p> thanks for the support </p>
              
              
                    <p>from ayia boutique</p>
        
              </div>
     
          </div>

          `
    };
  
      // 

      // this.http.get(data.returnUrl).subscribe(val => console.log(val))
    // this.http.post('https://ayia.herokuapp.com/send/recipt',mailOptions).subscribe()
      

      },
      onCancel: (data, actions) => {
        console.log('OnCancel');
    
        const httpOptions = {
          headers: new HttpHeaders({
            "Authorization": "Bearer <EC-8L886078GS0169925>",
            "Content-Type": "application/json",
            "Prefer": "return=representation"
          })
        }
      
        
        
        // this.http.get('https://api.sandbox.paypal.com/v2/invoicing/invoices',httpOptions).subscribe(
        //   val=>{
        //     console.log(val)
        //   }
        // )

        
      },
      onError: (err) => {
        console.log('OnError');

        
      },

      transactions: [{
            amount: {
              currency: 'AUD',
              total: this.totalCost,
            },
            // description: 'The payment transaction description.',
            custom: '90048630024435',
            //invoice_number: '12345', Insert a unique invoice number
            payment_options: {
              allowed_payment_method: 'INSTANT_FUNDING_SOURCE'
            },
            item_list:{
                items:  this.checkoutItems
                
            }
      }]
      });
    }


    // this function creates object and pushes it to array of checkout items
    addToCheckout(){
        for (let i =0; i< this.arrItems.length; i++){
          const price =  this.arrItems[i].price.toString()

          const check =  {
            name:  this.arrItems[i].name,
            currency: 'AUD',
            price:this.arrItems[i].price,
            quantity: this.arrItems[i].quantity,
            description: this.arrItems[i].description,
            tax: 0,
            sku: i,
          }
      
          this.checkoutItems.push(check)
        }

      // console.log(this.checkoutItems);
    }

    getTotal(){
      this.store.pipe(select('game')).subscribe(
        val=>
          {
            this.arrItems=val.myCartItems
            this.totalCost=0;
            for (let i =0; i< val.myCartItems.length; i++){
              this.totalCost += val.myCartItems[i].price;
            }
              this.totalCost=  this.totalCost.toFixed(2)
          }
    );
    }



}