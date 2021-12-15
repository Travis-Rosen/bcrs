import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Service } from '../interfaces/services';


@Injectable({
  providedIn: 'root'
})
export class CartService {


  services: Service[] = [];


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







  constructor() {

   }











}
