const { Composer } = require('telegraf')
const composer = new Composer()

composer.hears('📍Где находится Monday?', async (ctx) => {
    try {
        await ctx.replyWithLocation(39.770394, 64.444870)
    } catch (e) {
        console.error(e)
    }
})

module.exports = composer