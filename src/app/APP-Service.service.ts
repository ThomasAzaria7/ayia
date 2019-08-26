import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable({
  providedIn: 'root'
})


export class APPServiceService {

   totalCost = new Subject<any>();

arrItems: any;

constructor() {
  
  let retrievedObject = localStorage.getItem('cart');
  this.arrItems=JSON.parse(retrievedObject)



  // this.totalCost.subscribe(
  //   val =>{  console.log(val)
  //  return this.totalCost=val
  
  //   })
  

  // console.log(this.totalCost)


 
 }

 mytotal(){

 return this.totalCost
  // for (let i =0; i< this.arrItems.length; i++){

  //       this.totalCost = this.totalCost + this.arrItems[i].price;
      
  // }
 }

}
