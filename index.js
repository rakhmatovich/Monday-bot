const { Telegraf, Stage, session } = require('telegraf')
require('dotenv').config()

//// send massage to all users!!!
// const sqlite3 = require('sqlite3').verbose()
// const db = new sqlite3.Database('./usersInfo.db', sqlite3.OPEN_READWRITE, (err) => {
// 	if (err) return console.error(err.message);
// })

// sql = `SELECT * FROM users`;
// db.all(sql, [], (err, rows) => {
// 	if (err) return console.error(err.message);
// 	rows.forEach(row => {
// 		bot.telegram.sendMessage(row.chat_id, 'https://t.me/mondayAcademy')
// 	})
// })

const token = process.env.BOT_TOKEN
const bot = new Telegraf(token)

bot.use(session())

const stage = new Stage([require('./scenes/register.scene')])
bot.use(stage.middleware())

bot.use(require('./composers/start.composer'))
bot.use(require('./composers/utils.composer'))
bot.use(require('./composers/hears.composer'))
bot.use(require('./composers/courses.composer'))
bot.use(require('./composers/enroll.composer'))

bot.launch()