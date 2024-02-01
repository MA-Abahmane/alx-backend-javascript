const exp = require('express');

const app = exp();
const port = 7865;

// Start application server
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/available_payments', (req, res) => {
    res.send({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
});

app.post('/login', (req, res) => {
    res.send(`Welcome Betty`);
});


app.listen(port, () => {
    console.log('API available on localhost port 7865');
});


module.exports = app;
