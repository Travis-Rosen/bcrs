/*
============================================
; Title:  product.service.ts
; Author: Group-2
; Date:   08 December 2021
; Description: product service file
;===========================================
*/

import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];

  // array of services
  constructor() { 
    this.products = [
      {
        id: 100,
        title: 'Password Reset',
        price: 39.99,
        checked: false
      },
      {
        id: 101,
        title: 'Spyware Removal',
        price: 99.99,
        checked: false
      },
      {
        id: 102,
        title: 'RAM Upgrade',
        price: 129.99,
        checked: false
      },
      {
        id: 103,
        title: 'Software Installation',
        price: 49.99,
        checked: false
      },
      {
        id: 104,
        title: 'Tune-up',
        price: 89.99,
        checked: false
      },
      {
        id: 105,
        title: 'Keyboard Cleaning',
        price: 45.00,
        checked: false
      },
      {
        id: 106,
        title: 'Disk Clean-up',
        price: 149.99,
        checked: false
      },
      {
        id: 106,
        title: 'Data Recovery',
        price: 199.99,
        checked: false
      }
    ]
  }

  // retrieves all products
  getProducts(): Product[] {
    return this.products;
  }
}
