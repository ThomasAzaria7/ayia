import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-CustomCarousel',
  templateUrl: './CustomCarousel.component.html',
  styleUrls: ['./CustomCarousel.component.css']
})
export class CustomCarouselComponent implements OnInit, DoCheck {

  imageSources=[
    'https://firebasestorage.googleapis.com/v0/b/ayia-online.appspot.com/o/Home%2Fholla2.jpg?alt=media&token=dc9ec081-985d-4b65-a3a3-56d3f1b7166c',
    'https://firebasestorage.googleapis.com/v0/b/ayia-online.appspot.com/o/Home%2FAYIA9.jpg?alt=media&token=5952535b-0ad0-4c37-9d70-0fb03a444341',
    // ' https://firebasestorage.googleapis.com/v0/b/ayia-online.appspot.com/o/Home%2FAYIA11.jpg?alt=media&token=d8dfe6f0-5a99-4103-8628-60d939c1b40d'
  ]

  displayImage:{
    url:any,
    text:any,
    position:any;
  }

  steps=new Array(3).fill(false)
  start = 0


  
  constructor() { 
  
  
  }

  ngDoCheck(){




  }

  ngOnInit() { 

    this.steps[0]=true; 


  }


  next(){
    const i=this.start

    if(this.start <= 1){
     this.start++
      if(this.steps[i] == true){
        this.steps[i]=false
        this.steps[this.start]=true
      }
    }else{
      this.start=0;

      if(this.steps[i] == true){
        this.steps[i]=false
        this.steps[this.start]=true
      }
    }
    
    
  
  }
  prev(){
    const i=this.start

    if(this.start >= 1){
    this.start--
      if(this.steps[i] == true){
        this.steps[i]=false
        this.steps[this.start]=true
      }
    }

    else{
      this.start=2;
      
      if(this.steps[i] == true){
        this.steps[i]=false
        this.steps[this.start]=true
      }
    }
  
  }




}
