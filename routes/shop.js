const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

router.get('/show-product', (req, res, next) => {
    res.send(
      '<form action="/shop/show-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
    );
  });
  
  router.post('/show-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  });
  

module.exports = router;
