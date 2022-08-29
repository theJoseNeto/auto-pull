
require('dotenv').config();
const { TelegramBot } = require("./telegram-bot");
const telegram_token = process.env.TELEGRAM_TOKEN;
const telegramAPIActions = TelegramBot(telegram_token);



