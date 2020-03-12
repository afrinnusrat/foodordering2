import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProductDeailsComponent } from './product-deails/product-deails.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './shared/header/header.component';
import { AddressesComponent } from './account/addresses/addresses.component';
import { OrdersComponent } from './account/orders/orders.component';
import { MyAccountComponent } from './account/my-account/my-account.component';
import { SliderComponent } from './home/slider/slider.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './shared/menu/menu.component';
import { InfoComponent } from './product-deails/info/info.component';
import { FeedbackComponent } from './product-deails/feedback/feedback.component';
import { AddonsComponent } from './product-deails/addons/addons.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProductDeailsComponent,
    CartComponent,
    CheckoutComponent,
    FooterComponent,
    HeaderComponent,
    AddressesComponent,
    OrdersComponent,
    MyAccountComponent,
    SliderComponent,
    MenuComponent,
    InfoComponent,
    FeedbackComponent,
    AddonsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
