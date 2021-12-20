/**
=============================================================
; Title:  home.component.ts
; Author: group 2
; Date:   08 December 2021
; Description: home.component.ts
; =============================================================
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { InvoiceDialogSummaryComponent } from '../../shared/invoice-dialog-summary/invoice-dialog-summary.component';
import { Invoice } from './../../shared/invoice';
import { Product } from './../../shared/interfaces/product.interface';
import { InvoiceService } from './../../shared/services/invoice.service';
import { LineItem } from '../../shared/interfaces/line-item.interface';
import { Message } from 'primeng/api/message';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../../shared/services/product.service';
import { MatTable } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  username: string;
  products: Product[];
  lineItems: LineItem[];
  invoice: Invoice;
  errorMessages: Message[];
  successMessages: Message[];

  constructor(private cookieService: CookieService, private fb: FormBuilder, private router: Router,
  private productService: ProductService, private invoiceService: InvoiceService, private dialogRef: MatDialog) { 
    this.username = this.cookieService.get('session_user');
    this.products = this.productService.getProducts();
    this.invoice = new Invoice(this.username);
    this.lineItems = [];

    console.log(this.products);
  }

  ngOnInit(): void {}

  // Create an invoice for a user
  
  createInvoice() {
    console.log('createInvoice() this.invoice');
    console.log(this.invoice);

    console.log('createInvoice() this.products');
    console.log(this.products);

    for (let product of this.products) {
      if (product.checked) {
        this.lineItems.push(product);
      }
    }

    // show invoice summary 
    if (this.lineItems.length > 0) {
      this.invoice.setLineItems(this.lineItems);

      console.log('lineItems.length > 0; this.invoice');
      console.log(this.invoice);

      const dialogRef = this.dialogRef.open(InvoiceDialogSummaryComponent, {
        data: {
          invoice: this.invoice
        },
        disableClose: true,
        width: '800px'
      });

      dialogRef.afterClosed().subscribe(result => {
        // create invoice 
        if (result === 'confirm') {
          this.invoiceService.createInvoice(this.username, this.invoice).subscribe(res => {
            console.log('Invoice created');
            this.uncheckProducts();
            this.emptyLineItems();
            this.invoice.clear();
            this.successMessages = [
              {severity: 'success', summary: 'Success', detail: 'Your order has been processed successfully.'}
            ]
          })
        // cancel order
        } else {
          console.log('order canceled');
          this.uncheckProducts();
          this.emptyLineItems();
          this.invoice.clear();
        }
      })
    // on error
    } else {
      this.errorMessages = [
        {severity: 'error', summary: 'Error', detail: 'You must select at least one service.'}
      ]
    }
  }


  
   // Uncheck the order list
   
   uncheckProducts() {
    for (let product of this.products) {
      product.checked = false;
    }
  }

  /**
   * Empty line items
   */
  emptyLineItems() {
    this.lineItems = [];
  }

}
