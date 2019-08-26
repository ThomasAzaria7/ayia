import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css']
})
export class Template1Component implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  

  send(){

    const mailOptions = {
      from: 'thomas.azaria7@gmail.com', // sender address
      to: 'yungblackumbl3@gmail.com',    // list of receivers
      subject: 'welcome to Ayia boutique', // Subject line
      
      html:
       `
       <div style="display: grid; grid-template-columns: auto auto; justify-content: center; grid-gap: 10px; margin:50px 0" >
         
          <img width="200px"  height="300px" style="object-fit: cover; " src="https://images.pexels.com/photos/2101817/pexels-photo-2101817.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
          <div style="border: 2px solid rgb(167, 10, 10); padding: 10px; width:500px">
                <p> we are glad that you have joining us. </p>
                
                <p> thanks for the support </p>
          
          
                <p>from ayia boutique</p>
    
          </div>
 
      </div>

      `
};

  //

// console.log(this.signupForm.value.email);

this.http.post('https://ayia.herokuapp.com/send/mail',mailOptions).subscribe()
  }

}
