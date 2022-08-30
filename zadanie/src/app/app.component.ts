import { Component, OnInit } from '@angular/core';
import { ApiWorkOrdersService } from './api-services/api-work-orders.service';
import { Order, OrdersResponse } from './api-services/order.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'Orders';
}
