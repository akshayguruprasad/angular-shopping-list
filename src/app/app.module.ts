import { SupplierFieldProductListPipe } from './utility/SupplierFieldProductListPipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarsComponent } from './utility/stars/stars.component';
import { ProductComponent } from './utility/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent, SupplierFieldProductListPipe, StarsComponent, ProductComponent,WelcomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
      { path: 'productList', component: ProductListComponent },
      { path: 'product/:id', component: ProductComponent },
      { path: 'welcome', component: WelcomeComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  routes: any[] = [];

}
