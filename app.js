const express = require('express');
const config = require('./config/config');

const app = express();
const port = process.env.PORT ?? 3000;

const mainRoute = require('./routes/main.routes');
const registrationRoute = require('./routes/registration.routes');
const loginRoute = require('./routes/login.routes');
const logoutRoute = require('./routes/logout.routes')

config(app);

app.use('/', mainRoute);
app.use('/reg', registrationRoute);
app.use('/login', loginRoute);
app.use('/logout', logoutRoute);

app.listen(port, () => {
  console.log(`Server started at ${port} port`);
});
