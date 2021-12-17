import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/shared/interfaces/invoice';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-invoice-summary',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-summary.component.css']
})
export class InvoiceSummaryComponent implements OnInit {

  //Variables for different elements of the invoice
  invoice: Invoice;
  userName: string;
  orderDate: string;
  total: number;
  labor: number;
  parts: number;

  constructor(private dialogRef: MatDialogRef<InvoiceSummaryComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.invoice = data.invoice;

    console.log(`Parts amount: ${this.invoice.partsAmount}`)
    console.log(`Labor amount: ${this.invoice.getLaborAmount()}`)

    //Get amounts for specific invoice
    this.userName = this.invoice.getUsername();
    this.orderDate = this.invoice.getOrderDate();
    this.parts = this.invoice.partsAmount;
    this.labor = this.invoice.getLaborAmount();
    this.total = this.invoice.getTotal();
   }
  ngOnInit(): void {
  }

}
