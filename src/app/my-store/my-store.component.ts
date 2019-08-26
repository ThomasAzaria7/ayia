import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-store',
  templateUrl: './my-store.component.html',
  styleUrls: ['./my-store.component.css']
})
export class MyStoreComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
    
    // this.route.navigate(['online-store/1'])
    }

}
