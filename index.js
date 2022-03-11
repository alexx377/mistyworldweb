const express = require('express');
const app = express();

app.get('*', function(req, res) {
  res.send('Пока здесь ничего нет, но кто знает, что будет завтра...');
});

app.listen('8080', '127.0.0.1', function(err) {
  if(err) {
    console.log('Ошибка запуска сервера:', err.message)
  }
  else {
    console.log('Сервер запущен')
  }
});
