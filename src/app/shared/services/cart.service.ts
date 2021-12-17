import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Service } from '../interfaces/services';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../interfaces/invoice';


@Injectable({
  providedIn: 'root'
})
export class CartService {


  services: Service[] = [];


  constructor(private http: HttpClient) { }


  createInvoice(userName: string, invoice: Invoice): Observable<any> {
    return this.http.post(`/api/invoices/${userName}`, {
      userName: userName,
      lineItems: invoice.getLineItems(),
      partsAmount: invoice.partsAmount,
      laborHours: invoice.getLaborAmount(),
      lineItemsTotal: invoice.getLineItemTotal(),
      total: invoice.getTotal()
    })
  }

  addToCart(item: Service) {
    this.services.push(item);
  }

  getServices() {
    return this.services
  }

  clearCart() {
    this.services = [];
    return this.services;
  }

  findPurchasesByServiceGraph(): Observable<any> {
    return this.http.get(`/api/invoices/purchases-graph`);
  }




















}
