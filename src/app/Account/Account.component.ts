import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {auth} from 'firebase'
import { Router } from '@angular/router';

@Component({
  selector: 'app-Account',
  templateUrl: './Account.component.html',
  styleUrls: ['./Account.component.css']
})
export class AccountComponent implements OnInit {

  signupForm=new FormGroup({

    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required),
    // password: new FormControl(),
    // password: new FormControl(),
    
  })
  passwordErr: string;

  constructor(private http : HttpClient, private router: Router) { }

  ngOnInit() {

    
  }

  signupNow(){


    const firstName =this.signupForm.value.firstName;
    const lastName =this.signupForm.value.lastName;
    const myEmail = this.signupForm.value.email;

    let password
    if(this.signupForm.value.password == this.signupForm.value.confirmPassword){
       password = this.signupForm.value.confirmPassword;
      auth().createUserWithEmailAndPassword(myEmail,password).then(success=>{
        this.router.navigate([''])
        auth().currentUser.updateProfile({
          displayName: firstName +''+lastName,
          photoURL:''
        }).then( success => {console.log( 'added displayname')});
        

      })
      this.passwordErr=''; 



    }else{
      this.passwordErr='passwords do not match'
    }



        //
    const mailOptions = {
          from: 'thomas.azaria7@gmail.com', // sender address
          to: myEmail,    // list of receivers
          subject: 'welcome to Ayia boutique', // Subject line
          html:
           `
           <div style="display: grid; grid-template-columns: auto auto; justify-content: center; grid-gap: 10px; margin:50px 0" >
             
              <img width="200px"  height="300px" style="object-fit: cover; " src="https://images.pexels.com/photos/2101817/pexels-photo-2101817.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
              <div style="border: 2px solid rgb(167, 10, 10); padding: 10px; width:500px">
                    <p> hello  ${firstName } ${lastName} </P>
                    <p> we are glad that you have joining us. </p>
                    
                    <p> thanks for the support </p>
              
              
                    <p>from ayia boutique</p>
        
              </div>
     
          </div>

          `
    };
  
      //

    console.log(this.signupForm.value.email);
    
    this.http.post('https://ayia.herokuapp.com/send/mail',mailOptions).subscribe()

  }

  logout(){

    auth().signOut().then(success =>{
      console.log(success);
      
    }).then((err)=>{
      console.log(err);
      
    })
  }



}
