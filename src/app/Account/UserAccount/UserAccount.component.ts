import { Component, OnInit } from '@angular/core';
import {auth} from 'firebase'

@Component({
  selector: 'app-UserAccount',
  templateUrl: './UserAccount.component.html',
  styleUrls: ['./UserAccount.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout(){

    auth().signOut()

  }
}
