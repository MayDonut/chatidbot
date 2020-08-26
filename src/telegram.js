const TelegramBot = require('node-telegram-bot-api')
//Impots the Telegram API package
const token = '1311221112:AAHjlB-7AZNXKIRNG5qJhcMsElLkcrZdG0M'
//API token from BotFather, Do not share this with anyone
telegram = new TelegramBot(token, { polling: true })
//creaties the bot with polling on to receive updates.

module.exports = telegram;
//not sure yet!
