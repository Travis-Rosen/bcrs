import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/shared/interfaces/services';
import { CartService } from 'src/app/shared/services/cart.service';
import { MatTableDataSource } from '@angular/material/table';
import { LineItem } from 'src/app/shared/interfaces/line-item.interface';
import { Invoice } from 'src/app/shared/interfaces/invoice';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceSummaryComponent } from '../invoice-summary/invoice-summary.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  services: Service[];
  userName: string;
  lineItems: LineItem[];
  invoice: Invoice;
  errorMessages: Message[];
  successMessages: Message[];

  displayedColumns = ['name', 'price', 'confirm']

  constructor(private cartService: CartService, private cookieService: CookieService, private router: Router, private productService: ProductsService, private dialogRef: MatDialog) {
    this.userName = this.cookieService.get('sessionuser');
    this.services = this.cartService.getServices();
    this.invoice = new Invoice(this.userName);
    this.lineItems = [];
    console.log(this.services)
   }

   generateInvoice() {
     console.log('generateInvoice() this.invoice')
     console.log(this.invoice);
     console.log('generateInvoice() this.products')
     console.log(this.services);

     for (let service of this.services) {
       if (service.selected) {
         this.lineItems.push(service);
       }
     }
     if (this.lineItems.length > 0) {
       this.invoice.setLineItems(this.lineItems);
       const dialogRef = this.dialogRef.open(InvoiceSummaryComponent, {
         data: {
           invoice: this.invoice
         },
         disableClose: true,
         width: '800px'
       });

       dialogRef.afterClosed().subscribe(result => {
         if (result === 'confirm') {
           this.cartService.createInvoice(this.userName, this.invoice).subscribe(res => {
             console.log('Invoice created');
           })
         } else {
           console.log('order canceled');
         }
       })
     }
   }

  ngOnInit(): void {
  }

}
