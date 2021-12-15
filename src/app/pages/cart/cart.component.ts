import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/shared/interfaces/services';
import { CartService } from 'src/app/shared/services/cart.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  services: Service[];
  displayedColumns = ['name', 'price']
  products = this.cartService.getServices();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
