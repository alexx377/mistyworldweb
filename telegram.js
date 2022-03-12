const bb = require('bluebird');
const express = require('express');
const router = express.Router();

bb.config({
  cancellation: true
});

const TelegramBot = require('node-telegram-bot-api');
const token = '5031454420:AAE2NgxkFw_cDa2OTbk7SaeFxQfbF--sTng';
const url = 'https://misty-world.ru';

const bot = new TelegramBot(token);

bot.setWebHook(`${url}/t`);

bot.onText(/\/test (.+)/, function(msg, match) {
  const user = msg.from.username;
  const chatId = msg.chat.id;
  const resp = 'Параметры команды: ' + match[1];

  bot.sendMessage(chatId, resp, {
    "reply_markup": {
    "keyboard": [["Клавиша #1", "Клавиша #2"],   ["Клавиша #3"], ["Клавиша #4"]]
  }});
});

bot.on('message', function(msg) {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Моя твоя не понимать.');
});

router.post('/', function(req, res) {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

module.exports = router;
