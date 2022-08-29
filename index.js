require("dotenv").config();
const TelegramBot = require("./src/modules/telegram-bot");

const token = process.env.TELEGRAM_TOKEN; 

const botAPIActions = new TelegramBot(token); 

setInterval(async () => {
    
    botAPIActions.processUserMessageData().then(res => console.log(res));


}, 1000);