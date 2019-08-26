import { Component, OnInit, ViewChild ,EventEmitter} from '@angular/core';
import {auth, firestore} from 'firebase'
import * as Productactions from 'src/app/NgrxStore/productStateMan/products-Action.actions';
import * as ProductsReducer from 'src/app/NgrxStore/productStateMan/Products-Reducer.reducer';
import { Store,select } from '@ngrx/store';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { CookieService } from 'ngx-cookie-service';
import { NgbCarousel,NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-Home-landingPage',
  templateUrl: './Home-landingPage.component.html',
  styleUrls: ['./Home-landingPage.component.css'],
  providers:[NgbCarouselConfig]
})
export class HomeLandingPageComponent implements OnInit {
  @ViewChild('slideshow') slideshow:any;
  images = [1, 2, 3, 4, 5, 6, 7].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  showModal=false;

 
  imageSources=[
    'https://firebasestorage.googleapis.com/v0/b/ayia-online.appspot.com/o/Home%2Fholla2.jpg?alt=media&token=dc9ec081-985d-4b65-a3a3-56d3f1b7166c',
    'https://firebasestorage.googleapis.com/v0/b/ayia-online.appspot.com/o/Home%2FAYIA9.jpg?alt=media&token=5952535b-0ad0-4c37-9d70-0fb03a444341',
    // ' https://firebasestorage.googleapis.com/v0/b/ayia-online.appspot.com/o/Home%2FAYIA11.jpg?alt=media&token=d8dfe6f0-5a99-4103-8628-60d939c1b40d'
  ]

  imageSource2=[
    'https://images.pexels.com/photos/2463507/pexels-photo-2463507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/2399197/pexels-photo-2399197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/2496727/pexels-photo-2496727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  ]


  items
  myEmails
  db=firestore()
  constructor(private cookie:CookieService,config:NgbCarouselConfig) {

    this.db.collection('AyiaProducts').doc('subscribers').get().then(
      snapshot=>{
        this.myEmails=snapshot.data()
        // console.log(this.myEmails);
        
      }
    )
    
    //
    config.interval = 5000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    // Open modal in AJAX callback


  
    
    // onSlideRight((log)=>{
    //   console.log(log)
    // })
    
    
    
 
  }
  


  ngOnInit() {

   

 

 
    // const myCookie =this.cookie.get('modal')

    // if(myCookie == 'false'){
    //   this.showModal= false
    // }

    // console.log(myCookie)
    
    auth().onAuthStateChanged((user)=>{
      // console.log(user)  
    })


    
  }








  
  
  
    
}
