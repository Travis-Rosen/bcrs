/*
============================================
; Title:  invoice.interface.ts
; Author: Group-2
; Date:   07 December 2021
; Description: Interface for invoice object
;===========================================
*/

 /* Import required application files */
 import { LineItem } from '../../shared/interfaces/line-item.interface';

 export interface Invoice {
   userName: string;
   lineItems: LineItem[];
   partsAmount: number;
   laborAmount: number;
   lineItemTotal: number;
   total: number;
   orderDate: Date;
 
 }