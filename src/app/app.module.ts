import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AccountComponent } from './pages/account/account.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ExclusiveOfferComponent } from './components/exclusive-offer/exclusive-offer.component';

//Angular Material Modules


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    AccountComponent,
    CartComponent,
    CheckoutComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    FooterComponent,
    FeaturedProductsComponent,
    TestimonialsComponent,
    ExclusiveOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
