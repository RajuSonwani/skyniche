require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const clientsRouter = require('./routes/clients');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/profile', express.static('upload/images'));

app.use('/', indexRouter);
app.use('/register', clientsRouter);

//PORT
const PORT = process.env.PORT || 2050;

app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`)
})




