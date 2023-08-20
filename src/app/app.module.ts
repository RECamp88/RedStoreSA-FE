import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ExclusiveOfferComponent } from './components/exclusive-offer/exclusive-offer.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { ProductGalleryComponent } from './pages/product-gallery/product-gallery.component';

//Angular Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule} from '@angular/material/tabs';
import { MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    CartComponent,
    CheckoutComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    FeaturedProductsComponent,
    TestimonialsComponent,
    ExclusiveOfferComponent,
    SingleProductComponent,
    ProductGalleryComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    
    //angular material imports
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
