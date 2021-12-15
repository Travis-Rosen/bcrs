import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/products.interface';
import { Observable } from 'rxjs';
import { Service } from '../interfaces/services';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  services: Service[] = [
    {
      name: "Keyboard Cleaning",
      price: 30,
      category: "repair"
    },
    {
      name: "Password Reset",
      price: 20,
      category: "repair"
    },
    {
      name: "Software Install",
      price: 49.99,
      category: "repair"
    },
    {
      name: "Tune-Up",
      price: 89.99,
      category: "repair"
    },
    {
      name: "Spyware Removal",
      price: 99.99,
      category: "repair"
    },
    {
      name: "RAM Upgrade",
      price: 129.99,
      category: "repair"
    },
    {
      name: "Disk Clean-Up",
      price: 149.99,
      category: "repair"
    },
    {
      name: "The Starter PC",
      price: 800.99,
      category: "preBuilt"
    },
    {
      name: "The Master PC",
      price: 1200,
      category: "preBuilt"
    },
    {
      name: "Developer's Dream PC",
      price: 2000.99,
      category: "preBuilt"
    },
    {
      name: "TJS 2000",
      price: 200.99,
      category: "monitors"

    },
    {
      name: "Krasso's 32'' 144hz ",
      price: 300.99,
      category: "monitors"

    },
    {
      name: "TJS 3000",
      price: 250.99,
      category: "monitors"

    },
    {
      name: "Basic Keyboard",
      price: 50.99,
      category: "keyboards"

    },
    {
      name: "LED Keyboard",
      price: 99.99,
      category: "keyboards"

    },
    {
      name: "Developer's Keyboard & Mouse",
      price: 150.99,
      category: "keyboards"

    }
  ];

  findAllProducts() {
    return this.services;
  }





  constructor() { }

}

