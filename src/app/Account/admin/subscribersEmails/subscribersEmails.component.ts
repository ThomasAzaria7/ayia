import { Component, OnInit, DoCheck } from '@angular/core';
import {auth, firestore} from 'firebase'

@Component({
  selector: 'app-subscribersEmails',
  templateUrl: './subscribersEmails.component.html',
  styleUrls: ['./subscribersEmails.component.css']
})
export class SubscribersEmailsComponent implements OnInit,DoCheck {
 
  db=firestore()
  myEmails
  confirm=false;
  deleteEmail
  emailIndex: any;
  hideCLose=false

  constructor() {
    this.db.collection('AyiaProducts').doc('subscribers').get().then(
      snapshot=>{
        this.myEmails=snapshot.data().subscribers
        // console.log(this.myEmails);
        
      }
    )
   }

  ngOnInit() {
  }

  ngDoCheck(){
  }


  removeEmail(i){
   this.deleteEmail= this.myEmails.splice(i,1)
   this.emailIndex=i

   this.confirm=true;
   this.hideCLose=true


  
  }

  restart(){
    this.ngOnInit()
    this.myEmails.splice(this.emailIndex,0,this.deleteEmail)

    this.confirm=false;
   this.hideCLose=false

  }

  delete(){
    this.db.collection('AyiaProducts').doc('subscribers').set(
      {subscribers:this.myEmails}
    )
    this.confirm=false;
    this.hideCLose=false
    

  }

}
