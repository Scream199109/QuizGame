const express = require('express');
const config = require('./config/config');

const app = express();
const port = process.env.PORT ?? 3000;

const mainRoute = require('./routes/main.routes');
// const registrationRoute = require('./routes/registration.routes');

config(app);

app.use('/', mainRoute);
// app.use('/reg', registrationRoute);

app.get('/slider', (req, res) => {
  res.render('slider')
})
app.get('/card', (req, res) => {
  res.render('card')
})

app.listen(port, () => {
  console.log(`Server started at ${port} port`);
});
