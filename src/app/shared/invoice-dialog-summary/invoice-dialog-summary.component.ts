/*
 ; Title:  invoice-dialog-summary.js
 ; Author: Group-2
 ; Date:   13 December 2021
 ; Description: Invoice Dialog Summary
*/

//Import statements
import { Component, Inject, OnInit } from '@angular/core';
import { Invoice } from '../../../../server/models/invoice';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { constructorParametersDownlevelTransform } from '@angular/compiler-cli';

@Component({
  selector: 'app-invoice-dialog-summary',
  templateUrl: './invoice-dialog-summary.component.html',
  styleUrls: ['./invoice-dialog-summary.component.css']
})
export class InvoiceDialogSummaryComponent implements OnInit {

  //Variables for different elements of the invoice
  invoice: Invoice;
  username: string;
  orderDate: string;
  total: number;
  labor: number;
  parts: number;

  constructor(private dialogRef: MatDialogRef<InvoiceDialogSummaryComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.invoice = data.invoice;

    console.log(`Parts amount: ${this.invoice.partsAmount}`)
    console.log(`Labor amount: ${this.invoice.getLaborAmount()}`)

    //Get amounts for specific invoice
    this.username = this.invoice.getUsername();
    this.orderDate = this.invoice.getOrderDate();
    this.parts = this.invoice.partsAmount;
    this.labor = this.invoice.getLaborAmount();
    this.total = this.invoice.getTotal();
   }

  ngOnInit(): void {
  }

}
