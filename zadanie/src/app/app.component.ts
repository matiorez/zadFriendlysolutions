import { Component, OnInit } from '@angular/core';
import { ApiWorkOrdersService } from './api-services/api-work-orders.service';
import { Order, OrdersResponse } from './api-services/order.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zadanie';
  orders:Order[]= [];
  ordersFiltered:Order[]= [];
  searchQuery:string="";


  constructor(private apiWorkOrdersService:ApiWorkOrdersService ){}

  ngOnInit() {
    this.setOrders();
  }

   search() {

      this.ordersFiltered = this.searchQuery.length > 0 ? this.orders.filter(item => item.description.includes(this.searchQuery)) : this.ordersFiltered = this.orders;
  }

  setOrders(){
    this.apiWorkOrdersService.getOrders().then((data)=>{
      this.orders =  Object(data)?.response?.data;
      this.ordersFiltered = this.orders
    }).catch((error)=>{
    console.log("Promise rejected with " + JSON.stringify(error));
  });
  }



}
