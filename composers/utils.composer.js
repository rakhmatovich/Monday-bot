const { Composer } = require('telegraf')
const composer = new Composer()

composer.command('register', async (ctx) => {
	try {
		await ctx.scene.enter('register')
	} catch (e) {
		console.error('cant enter register scene', e)
	}
})

module.exports = composer
