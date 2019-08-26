import { Component, OnInit } from '@angular/core';
// import * as actions from '../NgrxStore/cartManagement/myAppActions.actions'
// import * as fromRoot from '../NgrxStore/cartManagement/myAppStore.reducer'
import { Store } from '@ngrx/store';
import {HttpClient} from '@angular/common/http'

import {firestore} from 'firebase'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   db=firestore()

  constructor(private http:HttpClient) { }

  

  ngOnInit() {


    

    // this.db.collection('testData').add(
    //   {
    //     name:'thomas',
    //     middleName:'Abel',
    //     age:25,
    //     handome:true,

    //   }
    // )
    // .then(success => {console.log(success)}).catch(err =>{console.log(err);
    // })

    

    // this.db.collection('testData').get().then(querySnapshot =>{
    //     // console.log(querySnapshot);
        
    //   querySnapshot.forEach(doc =>{
    //   })
    // })


  }

  sendmail(){
   
  }

}
