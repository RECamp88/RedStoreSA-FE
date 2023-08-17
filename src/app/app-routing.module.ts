import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { ProductGalleryComponent } from './pages/product-gallery/product-gallery.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'products', component: ProductGalleryComponent},
  {path: 'account', component: AccountComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'product/:id', component: SingleProductComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
