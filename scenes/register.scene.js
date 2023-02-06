const WizardScene = require('telegraf/scenes/wizard')
const { Markup } = require('telegraf')
const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./usersInfo.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
})

const capitalize = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
const removePlus = str => str[0] === '+' ? str.slice(1) : str;

module.exports = new WizardScene(
    'register',
    async (ctx) => {
        try {
            await ctx.replyWithHTML(`Ваше фамилия и имя?`)
            return ctx.wizard.next()
        } catch (e) {
            console.error(e);
        }
    },
    async (ctx) => {
        try {
            const fullName = capitalize(ctx.message.text)
            if (fullName.length < 2) return
            ctx.session.fullName = fullName

            await ctx.replyWithHTML('Отправьте свой номер телефона', {
                reply_markup: Markup.keyboard([
                    Markup.contactRequestButton("📞 Отправить номер телефона"),
                ]).resize().oneTime().forceReply(),
            })
            return ctx.wizard.next()
        } catch (e) {
            console.error(e);
        }
    },
    async (ctx) => {
        try {
            db.run(`DELETE FROM users WHERE chat_id = ?`, [ctx.message.chat.id], (err) => {
                if (err) return console.error(err.message);
            })

            if (ctx.message.contact?.phone_number) {
                db.run(`INSERT INTO users( chat_id, full_name, username, phone_number) VALUES(?,?,?,?)`,
                    [
                        ctx.message.chat.id,
                        ctx.session.fullName,
                        ctx.from.first_name,
                        removePlus(ctx.message.contact.phone_number)
                    ], (err) => {
                        if (err) return console.error(err.message);
                    })
            } else {
                db.run(`INSERT INTO users( chat_id, full_name, username, phone_number) VALUES(?,?,?,?)`,
                    [
                        ctx.message.chat.id,
                        ctx.session.fullName,
                        ctx.from.first_name,
                        removePlus(ctx.message.text)
                    ], (err) => {
                        if (err) return console.error(err.message);
                    })
            }
            await ctx.replyWithHTML(`Что вас интересует <b>${ctx.from.first_name}</b>?`, {
                reply_markup: Markup.keyboard([
                    [Markup.callbackButton('курсы'), Markup.callbackButton('Связаться с Monday')]
                ]).resize(),
            })
            return ctx.scene.leave()
        } catch (e) {
            console.error(e);
        }
    }
)