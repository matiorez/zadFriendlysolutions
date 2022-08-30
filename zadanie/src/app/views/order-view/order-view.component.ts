import { Component, OnInit } from '@angular/core';
import { ApiWorkOrdersService } from 'src/app/api-services/api-work-orders.service';
import { Order } from 'src/app/api-services/order.model';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss']
})
export class OrderViewComponent implements OnInit {

  orders:Order[]= [];
  ordersFiltered:Order[]= [];
  searchQuery:string="";


  constructor(private apiWorkOrdersService:ApiWorkOrdersService ){}

  ngOnInit() {
    this.setOrders();
  }

  search() {
    this.ordersFiltered = this.searchQuery.length > 0 ? this.orders.filter(item => item.description.toLowerCase().includes(this.searchQuery)) : this.ordersFiltered = this.orders;
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
