const { Composer } = require('telegraf')
const composer = new Composer()


composer.command('start', async (ctx) => {
	try {
		await ctx.replyWithHTML(`👋 Здравствуйте
		Зарегистрируйтесь, чтобы использовать нашего бота ✅`)
		await ctx.scene.enter('register')
	} catch (e) {
		console.error('cant handle start command', e)
	}
})

composer.command('help', async (ctx) => {
	try {
		await ctx.replyWithHTML('/register - Регистрация')
	} catch (e) {
		console.error('cant handle help command', e)
	}
})


module.exports = composer