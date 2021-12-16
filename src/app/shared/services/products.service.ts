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
      img: "../../../assets/kbr.jpg"
    },
    {
      name: "Password Reset",
      price: 20,
      category: "repair",
      img: "../../../assets/pswdr.jpg"
    },
    {
      name: "Software Install",
      price: 49.99,
      category: "repair",
      img: "../../../assets/softwarer.jpg"
    },
    {
      name: "Tune-Up",
      price: 89.99,
      category: "repair",
      img: "../../../assets/tuneupr.jpg"
    },
    {
      name: "Spyware Removal",
      price: 99.99,
      category: "repair",
      img: "../../../assets/malwarer.jpg"
    },
    {
      name: "RAM Upgrade",
      price: 129.99,
      category: "repair",
      img: "../../../assets/ramr.jpg"
    },
    {
      name: "Disk Clean-Up",
      price: 149.99,
      category: "repair",
      img: "../../../assets/diskr.jpg"
    },
    {
      name: "The Starter PC",
      price: 800.99,
      category: "preBuilt",
      img: "../../../assets/pc1.jpg"
    },
    {
      name: "The Master PC",
      price: 1200,
      category: "preBuilt",
      img: "../../../assets/pc2.jpg"
    },
    {
      name: "Developer's Dream PC",
      price: 2000.99,
      category: "preBuilt",
      img: "../../../assets/pc3.jpg"
    },
    {
      name: "TJS 2000",
      price: 200.99,
      category: "monitors",
      img: "../../../assets/mon1.jpg"
    },
    {
      name: "Krasso's 32'' 144hz ",
      price: 300.99,
      category: "monitors",
      img: "../../../assets/mon3.jpg"

    },
    {
      name: "TJS 3000",
      price: 250.99,
      category: "monitors",
      img: "../../../assets/mon2.jpg"

    },
    {
      name: "Basic Keyboard",
      price: 50.99,
      category: "keyboards",
      img: "../../../assets/kb1.jpg"

    },
    {
      name: "LED Keyboard",
      price: 99.99,
      category: "keyboards",
      img: "../../../assets/kb2.jpg"
    },
    {
      name: "Developer's Keyboard",
      price: 150.99,
      category: "keyboards",
      img: "../../../assets/kb3.jpg"
    }
  ];

  findAllProducts() {
    return this.services;
  }





  constructor() { }

}

