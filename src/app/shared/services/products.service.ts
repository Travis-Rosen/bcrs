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
      category: "repair",
      img: "../../../assets/kbr.jpg",
      selected: false
    },
    {
      name: "Password Reset",
      price: 20,
      category: "repair",
      img: "../../../assets/pswdr.jpg",
      selected: false
    },
    {
      name: "Software Install",
      price: 49.99,
      category: "repair",
      img: "../../../assets/softwarer.jpg",
      selected: false
    },
    {
      name: "Tune-Up",
      price: 89.99,
      category: "repair",
      img: "../../../assets/tuneupr.jpg",
      selected: false
    },
    {
      name: "Spyware Removal",
      price: 99.99,
      category: "repair",
      img: "../../../assets/malwarer.jpg",
      selected: false
    },
    {
      name: "RAM Upgrade",
      price: 129.99,
      category: "repair",
      img: "../../../assets/ramr.jpg",
      selected: false
    },
    {
      name: "Disk Clean-Up",
      price: 149.99,
      category: "repair",
      img: "../../../assets/diskr.jpg",
      selected: false
    },
    {
      name: "The Starter PC",
      price: 800.99,
      category: "preBuilt",
      img: "../../../assets/pc1.jpg",
      selected: false
    },
    {
      name: "The Master PC",
      price: 1200,
      category: "preBuilt",
      img: "../../../assets/pc2.jpg",
      selected: false
    },
    {
      name: "Developer's Dream PC",
      price: 2000.99,
      category: "preBuilt",
      img: "../../../assets/pc3.jpg",
      selected: false
    },
    {
      name: "TJS 2000",
      price: 200.99,
      category: "monitors",
      img: "../../../assets/mon1.jpg",
      selected: false
    },
    {
      name: "Krasso's 32'' 144hz ",
      price: 300.99,
      category: "monitors",
      img: "../../../assets/mon3.jpg",
      selected: false

    },
    {
      name: "TJS 3000",
      price: 250.99,
      category: "monitors",
      img: "../../../assets/mon2.jpg",
      selected: false

    },
    {
      name: "Basic Keyboard",
      price: 50.99,
      category: "keyboards",
      img: "../../../assets/kb1.jpg",
      selected: false

    },
    {
      name: "LED Keyboard",
      price: 99.99,
      category: "keyboards",
      img: "../../../assets/kb2.jpg",
      selected: false
    },
    {
      name: "Developer's Keyboard",
      price: 150.99,
      category: "keyboards",
      img: "../../../assets/kb3.jpg",
      selected: false
    }
  ];

  findAllProducts(): Service[]{
    return this.services;
  }





  constructor() { }

}

