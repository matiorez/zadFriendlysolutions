import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrderViewComponent } from './views/order-view/order-view.component';
import { ApiWorkOrdersService } from './api-services/api-work-orders.service';



@NgModule({
  declarations: [
    AppComponent,
    OrderViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiWorkOrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
