/*
============================================
; Title:  invoice.service.ts
; Author: Group-2
; Date:   08 December 2021
; Description: invoice service file
;===========================================
*/


import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Invoice } from '../invoice';

@Injectable({
    providedIn: 'root'
})
export class InvoiceService {

    constructor(private http: HttpClient) { }

    createInvoice(userName: string, invoice: Invoice): Observable<any> {
        return this.http.post(`/api/invoices/${userName}`, {
            userName: userName,
            lineItems: invoice.getLineItems(),
            partsAmount: invoice.partsAmount,
            laborAmount: invoice.getLaborAmount(),
            lineItemTotal: invoice.getLineItemTotal(),
            total: invoice.getTotal()
        })
    }

    findPurchasesByServiceGraph(): Observable<any> {
        return this.http.get(`/api/invoices/purchases-graph`);
    }
}