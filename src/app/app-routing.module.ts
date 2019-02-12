import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent} from './products/products.component';
import { ErrComponent } from './err/err.component';

const routes: Routes = [
  {path: 'home', component : HomeComponent}, // for home route
  {path: 'products', component : ProductsComponent}, // for products
  // {path: 'products/?id', component : ProductInfoComponent}, // for products-list
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'err', component : ErrComponent }, // for  err
  {path: '**', redirectTo: 'err', pathMatch: 'full' } // for null  or error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
