/*
 ; Title:  invoice-dialog-summary.js
 ; Author: Group-2
 ; Date:   13 December 2021
 ; Description: Invoice Dialog Summary
*/

//Import statements
import { Component, Inject, OnInit } from '@angular/core';
import { Invoice } from '../invoice';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from "@angular/router";
import { Message } from 'primeng/api/message';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-invoice-dialog-summary',
  templateUrl: './invoice-dialog-summary.component.html',
  styleUrls: ['./invoice-dialog-summary.component.css']
})


export class InvoiceDialogSummaryComponent implements OnInit {

  invoice: Invoice;
  username: string;
  orderDate: string;
  total: number;
  labor: number;
  parts: number;
  successMessages: Message[];

  constructor(private dialogRef: MatDialogRef<InvoiceDialogSummaryComponent>, private invoiceService: InvoiceService, private router: Router, @Inject(MAT_DIALOG_DATA) data) {
    this.invoice = data.invoice;

    console.log(`Parts amount: ${this.invoice.partsAmount}`)
    console.log(`Labor amount: ${this.invoice.getLaborAmount()}`)

    this.username = this.invoice.getUsername();
    this.orderDate = this.invoice.getOrderDate();
    this.parts = this.invoice.partsAmount;
    this.labor = this.invoice.getLaborAmount();
    this.total = this.invoice.getTotal();
    
   }

   
  ngOnInit() {
    
    }

  confirmOrder(): void {
    this.invoiceService.createInvoice(this.username, this.invoice).subscribe(
      (res) => {
        this.router.navigate(["/"]);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}