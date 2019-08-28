import { Component, OnInit } from '@angular/core';
import {auth, firestore} from 'firebase'

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  isOpen = true;
  title = 'AYIA-Holla';

  //
  myEmails
  db=firestore()
  //

  //on production 
    loaded=false; // 
    home=false;
    navigate=false


  //  testing
    // loaded=true;
    // home=false;
    // navigate=true


  admin
  showModal=false

  constructor(private cookie:CookieService){
    this.db.collection('AyiaProducts').doc('subscribers').get().then(
      snapshot=>{
        this.myEmails=snapshot.data()
        
      }
    )
  }

  ngOnInit(): void {

  

    auth().onAuthStateChanged((user)=>{

      if(user.uid == '1JZfwUOOYFYEAkq1yIH4q0By3t03'){
          this.admin=true;
       }
      })

    setTimeout(()=>{
      this.loaded=true  //on production
      this.home=true;  // on production 


      // this.home=false;
        // this.navigate=true;  // on production 

      //
    },2000) 
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  
    setTimeout(()=>{
      this.showModal=true
     },60000) //2 mins ==120000


  }


  toggle() {
    this.isOpen = !this.isOpen;
  }

  // closes the coming soon subscribe modal
  close(){
    this.home =false;

    // this.loaded=false;
    this.navigate=true;

    // console.log(this.loaded,this.home)
    // if(this.loaded == true && this.home == true){
    //   this.navigate=true;
    // }
  }
// closes the home modal
  closeModal(){
    this.showModal=false

    // when user clicks closed, they will not see the subscribe modal again for the set amount of time.
    const date = new Date();
     date.setTime(date.getTime() + (1 * 6 * 60 * 60 * 1000));  // expires in one day.
        // date.setTime(date.getTime() + (60 * 1000));
        this.cookie.set('modal','false',date)
    //
   }


  SubscribeNow(email){
  // function used to get data from subsrcibe modal
    if(this.myEmails){
        this.myEmails.subscribers.push(email.value)
    }else{
        this.myEmails={
          subscribers:[email.value]
        }
      }
    this.db.collection('AyiaProducts').doc('subscribers').set(
      this.myEmails
    )

  }
}
