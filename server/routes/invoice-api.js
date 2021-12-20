/*
=====================================================
; Title: Bob's Computer Repair Shop
; Author: Professor Krasso
; Date: 13 December 2021
; Modified By: Group-2
; Description: API's for Invoice  CRUD operations.
=====================================================
*/

// Require statements
const bcrypt = require('bcryptjs');
const express = require('express');
const User = require('../models/user');
const ErrorResponse = require('../services/error-response');
const BaseResponse = require('../services/base-response');
const Invoice = require('../models/invoice')


// Configurations
const router = express.Router();
//-----------------------------Invoice API's-----------------------------------------------------//

//createInvoice
router.post('/:userName', async(req,res) => {
  // Try/catch
  try
  {
    //Create newInvoice
    const newInvoice = {
      userName: req.params.userName,
      lineItems: req.body.lineItems,
      partsAmount: req.body.partsAmount,
      laborAmount: req.body.laborAmount,
      lineItemTotal: req.body.lineItemTotal,
      total: req.body.total
    }

    console.log(newInvoice);

    Invoice.create(newInvoice, function(err, invoice)
    {
      if (err)
      {
      console.log(err);
      //If error log Error Response 500
      const createInvoiceMongodbErrorResponse= new ErrorResponse('500', 'Internal server error', err);
      res.status(500).send(createInvoiceMongodbErrorResponse.toObject());
    }
      else
      //Response successful query
      {
        console.log(invoice);
        const createInvoiceResponse = new BaseResponse('200', 'Query successful', invoice);
        res.json(createInvoiceResponse.toObject());
      }
    })
  }
  catch (e)
  //Catch Error
    {
      console.log(e);
      const createInvoiceCatchErrorResponse = new ErrorResponse('500', 'Internal Server Error', e.message);
      res.status(500).send(createInvoiceCatchErrorResponse.toObject());
    }
});


//findPurchasesByService
router.get('/purchases-graph', async(req, res) => {
  //Try/catch block
  try
  {
    Invoice.aggregate([
      {
      $unwind: '$lineItems'
      },
      {
        $group:
          {
            '_id':
              {
                'title': '$lineItems.title',
                'price': '$lineItems.price'
              },
            'count':
              {
                $sum: 1
              }
          }
      },
      {
        $sort:
        {
          '_id.title': 1
        }
      }
    ], function(err, purchaseGraph)
    {
      if(err)
      {
        console.log(err);
        const findPurchaseByServiceGraphMongodbErrorResponse = new ErrorResponse('500', 'Internal server error', err);
        res.status(500).send(findPurchaseByServiceGraphMongodbErrorResponse.toObject());
      }
      else
      {
        console.log(purchaseGraph);
        const findPurchaseByServiceGraphResponse = new ErrorResponse('200', 'Query successful', purchaseGraph);
        res.json(findPurchaseByServiceGraphResponse.toObject());
      }
    })
  }
  catch (e)
  {
    console.log(e);
    const findPurchaseServiceGraphCatchErrorResponse = new ErrorResponse('500', 'Internal server error', e.message);
    res.status(500).send(findPurchaseServiceGraphCatchErrorResponse.toObject());
  }
})


//Export the router
module.exports = router
