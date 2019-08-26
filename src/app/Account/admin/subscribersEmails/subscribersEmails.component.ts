import { Component, OnInit } from '@angular/core';
import {auth, firestore} from 'firebase'

@Component({
  selector: 'app-subscribersEmails',
  templateUrl: './subscribersEmails.component.html',
  styleUrls: ['./subscribersEmails.component.css']
})
export class SubscribersEmailsComponent implements OnInit {
 
  db=firestore()
  myEmails
  constructor() {
    this.db.collection('AyiaProducts').doc('subscribers').get().then(
      snapshot=>{
        this.myEmails=snapshot.data().subscribers
        console.log(this.myEmails);
        
      }
    )
   }

  ngOnInit() {
  }

}
