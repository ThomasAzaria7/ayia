import { Component, OnInit } from '@angular/core';
import {auth} from 'firebase'
import { Router } from '@angular/router';

@Component({
  selector: 'app-SignIn',
  templateUrl: './SignIn.component.html',
  styleUrls: ['./SignIn.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  signIn(email,password){
    auth().signInWithEmailAndPassword(email.value,password.value)
    .then(success=>{
      console.log(success);
      this.router.navigate([''])
    }).catch(err=>{
      console.log(err);
      
    })
  }

}
