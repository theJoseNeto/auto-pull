require('dotenv').config();
const axios = require("axios").default;

class TelegramBot {

    constructor(token) {
        this.token = token;
        this.apiConnectionUrl = `https://api.telegram.org/bot${token}`;
        this.answeredMessages = [];
    }


    userMessageData = async () => await (await axios.get(`${this.apiConnectionUrl}/getUpdates`)).data;

    processUserMessageData = async () => {
        const data = await this.userMessageData();
        const lastMessage = data.result[data.result.length - 1];

        const result = {
            telegramUsername: lastMessage.message.from.username,
            chat_id: lastMessage.message.chat.id,
            update_id: lastMessage.update_id,
            userMessage: lastMessage.message.text
        }
        return result;
    }

    userAuthtication = async ( ) => {
        const  {userMessage} = await this.processUserMessageData();
        const formatedUserMessage = userMessage.split(); // expected --> [/Auth, "username", password]
        const ADMUSERNAME = "teste"; //process.env.ADMUSERNAME
        const ADMPASSWORD = "teste"; //process.env.ADMPASSWORD

        const allright = 
            formatedUserMessage.length == 3 && 
            formatedUserMessage[1] === "/Auth" && 
            formatedUserMessage[1] === ADMUSERNAME && 
            formatedUserMessage[2] === ADMPASSWORD; 

            if(allright) {
                //open session 
            }else {
                // save user data; 
            }

            

    }





    sendMessage = async (text, chatId, update_id) => {
        const userMessageIsAnsewered = this.messageIsAnsewered(update_id);

        if (!userMessageIsAnsewered) {
            const sendMessage = `${this.apiConnectionUrl}/sendMessage?chat_id=${chatId}&text=${text}`;
            await axios.get(sendMessage);
            await this.saveAnseweredMessage(update_id);
        }

        return;
    }




    saveAnseweredMessage = update_id => this.answeredMessages[0] = update_id;

    messageIsAnsewered = update_id => {
        let isAnswered = false;
        if (update_id === this.answeredMessages[0]) isAnswered = true;
        return isAnswered
    }
}

module.exports = TelegramBot;
