import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { Service } from 'src/app/shared/interfaces/services';
import { CartService } from 'src/app/shared/services/cart.service';
import { BaseLayoutComponent } from 'src/app/shared/base-layout/base-layout.component';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  services: Service[];
  filteredService: Service[];



  constructor(private productService: ProductsService, private cartService: CartService, private baseLayoutService: BaseLayoutComponent, private dialog: MatDialog) {
    this.services = productService.findAllProducts();
   }


   addToCart(item: Service) {
     this.cartService.addToCart(item);
     this.dialog.open(CartDialogComponent);
   }


   filterData(category: string = null){
     if (category) {
       this.filteredService = this.services.filter(
         x => x.category == category
       );
     } else {
       this.filteredService = this.services;
     }
   }


  ngOnInit(): void {
    this.filterData();

   }



}

