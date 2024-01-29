


const exp = require('express');

const app = exp();
const port = 1245;

// Start application server
app.use((req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port);

module.exports = app;
