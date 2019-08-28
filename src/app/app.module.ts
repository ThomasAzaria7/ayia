import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

import { MyStoreComponent } from './my-store/my-store.component';
import { AboutComponent } from './about/about.component';
import { MycartComponent } from './mycart/mycart.component';
import { Product1Component } from './my-store/products/product1/product1.component';
import { Product2Component } from './my-store/products/product2/product2.component';
import { HomeLandingPageComponent } from './Home-landingPage/Home-landingPage.component';
import { AdminComponent } from './Account/admin/admin.component';

// state
import {scoreboardReducer} from './NgrxStore/cartManagement/myAppStore.reducer';
import {ProductsReducer} from './NgrxStore/productStateMan/Products-Reducer.reducer'
import { APPServiceService } from './APP-Service.service'; 

// modules
import { NgxCurrencyModule } from "ngx-currency";
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { NgxPayPalModule } from 'ngx-paypal';
import { AccountComponent } from './Account/Account.component';
import { ReactiveFormsModule } from '@angular/forms';
import {SlideshowModule} from 'ng-simple-slideshow';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { CookieService } from 'ngx-cookie-service';
import {initializeApp} from 'firebase'
// other
import 'hammerjs';
import { SignInComponent } from './Account/SignIn/SignIn.component';
import { UserAccountComponent } from './Account/UserAccount/UserAccount.component';
import { ProductAdminManagementComponent } from './Account/admin/productAdminManagement/productAdminManagement.component';
import { ANalyticalComponent } from './Account/admin/ANalytical/ANalytical.component';
import { SubscribersEmailsComponent } from './Account/admin/subscribersEmails/subscribersEmails.component';
import { CustomCarouselComponent } from './Home-landingPage/CustomCarousel/CustomCarousel.component';
import { ComingSoonPageComponent } from './Home-landingPage/comingSoonPage/comingSoonPage.component';
import { ProductsPreviewComponent } from './my-store/products/ProductsPreview/ProductsPreview.component';
import { Template1Component } from './A-templates/template1/template1.component';
import { FormsModule } from '@angular/forms';


// const firebaseConfig = {
//   apiKey: "AIzaSyBU4tXjVTIbHlpsWWYFYe-o-5mXiuhMGA8",
//   authDomain: "ayia-online.firebaseapp.com",
//   databaseURL: "https://ayia-online.firebaseio.com",
//   projectId: "ayia-online",
//   storageBucket: "ayia-online.appspot.com",
//   messagingSenderId: "733519640929",
//   appId: "1:733519640929:web:4d433a128f29e5d3"
// };
// Initialize Firebase
// initializeApp(firebaseConfig);


@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      FooterComponent,
      MyStoreComponent,
      AboutComponent,
      MycartComponent,
      Product1Component,
      Product2Component,
      //myAppActions,
      ProductsPreviewComponent,
      HomeLandingPageComponent,
      AccountComponent,
      AdminComponent,
      SignInComponent,
      UserAccountComponent,
      ProductAdminManagementComponent,
      ANalyticalComponent,
      SubscribersEmailsComponent,
      CustomCarouselComponent,
      ComingSoonPageComponent,
      Template1Component
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
      SlideshowModule,
      NgxPayPalModule,
      NgxCurrencyModule,
      StoreModule.forRoot(
          {game:scoreboardReducer, ProductState:ProductsReducer}
     ),
     NgbModule,
     NgxSmartModalModule.forRoot(),
   ],
   providers: [
      APPServiceService,
      CookieService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
