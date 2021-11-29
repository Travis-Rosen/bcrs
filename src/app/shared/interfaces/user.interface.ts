/*
============================================
; Title:  user.interface.ts
; Author: Group-2
; Date:   29 November 2021
; Description: Interface for User object
;===========================================
*/


/**
 * Export Interface
 */

export interface User {
    _id?: string;
    userName?: string;
    password?: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    email: string;
}