const telegram = require('./src/telegram.js')

telegram.on('message', async (message) => {
	console.log(message)
	telegram.sendMessage(message.chat.id, message.chat.id)
})
