const path = require('path');
const express = require('express');
const app = express();
const bot = require('./telegram.js');

app.use(express.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/css', express.static(path.join(__dirname, 'styles')));
app.use('/img', express.static(path.join(__dirname, 'imgs')));
app.use('/fnt', express.static(path.join(__dirname, 'fonts')));

app.use('/t', bot);

app.get('*', function(req, res) {
  res.render('main');
});

app.listen('8080', '127.0.0.1', function(err) {
  if(err) {
    console.log('Ошибка запуска сервера:', err.message)
  }
  else {
    console.log('Сервер запущен')
  }
});
