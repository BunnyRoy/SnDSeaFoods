import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule }  from '@angular/common/http';
import { ServerConnectService } from './server-connect.service';
import { ItemListingComponent } from './item-listing/item-listing.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    ProductListComponent,
    ItemListingComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
     { path:'',component:HomeComponent},
    {path:'MenuId/1025',component: ItemListingComponent},
    {path:'Product/:Id',component: ProductComponent}
    ])
  ],
  providers: [ServerConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
