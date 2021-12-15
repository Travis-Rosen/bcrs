
/* --NOT BEING USED--*/

const ErrorResponse = require('../services/error-response');
const BaseResponse = require('../services/base-response');
const Product = require('../models/product');
const express = require('express');
const router = require('./session-api');



//FindAllProducts
router.get('/', async(req, res) => {
  try {
    Product.find({}, function(err, products) {
      if (err) {
        console.log(err);
        const findProductsMongoDbErrorResponse = new ErrorResponse('500', 'Internal Server Error', err);
        res.status(500).send(findProductsMongoDbErrorResponse.toObject());
      } else {
        console.log(products);
        const findProductsResponse = new BaseResponse('200', 'Query Successful', products);
        res.json(findProductsResponse.toObject());
      }
    })
  } catch (e) {
    console.log(e);
    const findProductsCatchErrorResponse = new ErrorResponse('500', 'Internal Server Error', e);
    res.status(500).send(findProductsCatchErrorResponse.toObject());

  }
});

module.exports = router;

