const express = require('express');
const app = express();
app.use((req, res, next) => {
  console.log('middleware1');
  next();
});
app.get('/', function(req, res) {
  res.send('<h1>Hello world!</h1>');
});
app.listen(3000);