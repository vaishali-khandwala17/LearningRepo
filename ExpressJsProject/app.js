const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const Database = require('./config/db');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const itemsRouter = require('./routes/itemRoutes');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/items', itemsRouter);
const errorHandler = require('./utils/errorHandler');
// Middleware to parse JSON body

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
//
app.listen(3001, function() {
  console.log("Listening on port 3000");
})
// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
app.use(errorHandler); // Error handling middleware


// Database;

module.exports = app;
