import { Component, OnInit } from '@angular/core';
import { firestore, auth } from 'firebase';
import { Subscriber } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comingSoonPage',
  templateUrl: './comingSoonPage.component.html',
  styleUrls: ['./comingSoonPage.component.css']
})
export class ComingSoonPageComponent implements OnInit {
  myEmails
  db=firestore()
  Subscribed=false;
  input=true;
  err
  seekAccess=false;
  loginErr

  cominSoonForm= new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required] )
  })


  constructor(private router:Router) { 
    this.db.collection('AyiaProducts').doc('subscribers').get().then(
      snapshot=>{
        this.myEmails=snapshot.data()
      }
    )
  }

  ngOnInit() {
  }

  Subscribe(){

    this.db.collection('AyiaProducts').doc('subscribers').get().then(
      snapshot=>{
        this.myEmails=snapshot.data()
      }
    )

    const validemail= this.cominSoonForm.valid
    const data  =  this.cominSoonForm.value.email
    
        if(data != '' && validemail == true ){

              if(this.myEmails ){
                let  result=  this.myEmails.subscribers.find((x)=> x == data)
                if(!result){
                  this.myEmails.subscribers.push(data)
                }
                this.err=''
              }else{
                this.myEmails={ subscribers:[data]}

              }
              this.cominSoonForm.reset()
              this.db.collection('AyiaProducts').doc('subscribers').set( this.myEmails)
              this.input=false


        }else{
            this.err ='please check your email address'
        }

  }  

  grantAccess(){
    this.seekAccess==false? this.seekAccess=true: this.seekAccess=false;
  }
  
  signIn(email,password){
    auth().signInWithEmailAndPassword(email.value,password.value)
    .then(success=>{
      // console.log(success);
      this.router.navigate(['']) 
    }).catch(err=>{ 
      this.loginErr=err
    })
  }
  

}
