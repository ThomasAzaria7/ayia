import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MyStoreComponent } from './my-store/my-store.component';
import { AboutComponent } from './about/about.component';
import { MycartComponent } from './mycart/mycart.component';
import { Product1Component } from './my-store/products/product1/product1.component';
import { Product2Component } from './my-store/products/product2/product2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeLandingPageComponent } from './Home-landingPage/Home-landingPage.component';
import { AccountComponent } from './Account/Account.component';
import { AdminComponent } from './Account/admin/admin.component';
import { SignInComponent } from './Account/SignIn/SignIn.component';
import { UserAccountComponent } from './Account/UserAccount/UserAccount.component';
import { ProductAdminManagementComponent } from './Account/admin/productAdminManagement/productAdminManagement.component';
import { ANalyticalComponent } from './Account/admin/ANalytical/ANalytical.component';
import { SubscribersEmailsComponent } from './Account/admin/subscribersEmails/subscribersEmails.component';
import { ComingSoonPageComponent } from './Home-landingPage/comingSoonPage/comingSoonPage.component';
import { ProductsPreviewComponent } from './my-store/products/ProductsPreview/ProductsPreview.component';
import { Template1Component } from './A-templates/template1/template1.component';

  const routes: Routes = [

    {path:'checkout',component: MycartComponent},
    
    {path:'online-store', component: MyStoreComponent,children:[
      {path:'shop', component:Product1Component},
      {path:'serum', component:Product2Component},
      {path:':code', component:ProductsPreviewComponent},
    ]},

    {path:'', component: HomeLandingPageComponent},
    {path:'account', component: AccountComponent},
    {path:'login', component: SignInComponent},
    {path:'user_account', component: UserAccountComponent},
    {path:'admin', component: AdminComponent, children:[ 
      {path:'productManagement', component: ProductAdminManagementComponent},
      {path:'analysis', component: ANalyticalComponent},
      {path:'subscribers', component: SubscribersEmailsComponent}
    ]},
    {path:'about-us', component:AboutComponent},
    {path:'temp', component:Template1Component},
    // {path:'catalogue', component: MainComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    
  ],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
