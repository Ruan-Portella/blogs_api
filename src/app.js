const express = require('express');
const AuthRouter = require('./routes/authRoute');
const userRouter = require('./routes/userRoute');
const categoryRoute = require('./routes/categoryRoute');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.use('/', AuthRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRoute);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
