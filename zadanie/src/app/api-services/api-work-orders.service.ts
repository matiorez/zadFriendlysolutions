import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrdersResponse } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class ApiWorkOrdersService {

  constructor(private httpClient:HttpClient) { }

  getOrders(){
    return this.httpClient.get('http://localhost:4200/assets/data.json').toPromise();
  }
}
