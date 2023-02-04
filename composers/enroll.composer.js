const { Composer, Markup } = require('telegraf')
const axios = require('axios');
const sqlite3 = require('sqlite3').verbose()

const composer = new Composer()
const db = new sqlite3.Database('./usersInfo.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
})

composer.hears("записаться на курс 🤳SMM", async (ctx) => {
    try {
        await ctx.replyWithHTML(`Спасибо за ваше потраченное время. Мы свяжемся с вами в ближайшее время😊`, {
            reply_markup: Markup.keyboard([
                [Markup.callbackButton('📍Где находится Monday?')]
            ]).resize(),
        })

        db.all(`SELECT * FROM users WHERE chat_id = ?`, [ctx.message.chat.id], (err, row) => {
            if (err)
                return console.error(err.message);
            let obj = row[0];
            axios.post('http://localhost:3000/users', {
                name: obj.full_name,
                phone: obj.phone_number,
                phone_second: null,
                advert: "528",
                course: "1",
                birthday: "2023-01-01",
                email: "",
                seller: 5,
                description: "",
                state: 9
            }).then(resp => {
                console.log(resp.data);
            }).catch(error => {
                console.error(error);
            });
        })
    } catch (e) {
        console.error(e);
    }
})

composer.hears("записаться на курс 🧑‍🎨Графический дизайн", async (ctx) => {
    try {
        await ctx.replyWithHTML(`Спасибо за ваше потраченное время. Мы свяжемся с вами в ближайшее время😊`, {
            reply_markup: Markup.keyboard([
                [Markup.callbackButton('📍Где находится Monday?')]
            ]).resize(),
        })

        db.all(`SELECT * FROM users WHERE chat_id = ?`, [ctx.message.chat.id], (err, row) => {
            if (err)
                return console.error(err.message);
            let obj = row[0];
            axios.post('http://localhost:3000/users', {
                name: obj.full_name,
                phone: obj.phone_number,
                phone_second: null,
                advert: "528",
                course: "2",
                birthday: "2023-01-01",
                email: "",
                seller: 5,
                description: "",
                state: 9
            }).then(resp => {
                console.log(resp.data);
            }).catch(error => {
                console.log(error);
            });
        })
    } catch (e) {
        console.error(e);
    }
})

composer.hears("записаться на курс 👨‍💻Бэкенд", async (ctx) => {
    try {
        await ctx.replyWithHTML(`Спасибо за ваше потраченное время. Мы свяжемся с вами в ближайшее время😊`, {
            reply_markup: Markup.keyboard([
                [Markup.callbackButton('📍Где находится Monday?')]
            ]).resize(),
        })
        
        db.all(`SELECT * FROM users WHERE chat_id = ?`, [ctx.message.chat.id], (err, row) => {
            if (err)
                return console.error(err.message);
            let obj = row[0];
            axios.post('http://localhost:3000/users', {
                name: obj.full_name,
                phone: obj.phone_number,
                phone_second: null,
                advert: "528",
                course: "8",
                birthday: "2023-01-01",
                email: "",
                seller: 5,
                description: "",
                state: 9
            }).then(resp => {
                console.log(resp.data);
            }).catch(error => {
                console.log(error);
            });
        })
    } catch (e) {
        console.error(e);
    }
})

composer.hears("записаться на курс 👨‍💻Фронтенд", async (ctx) => {
    try {
        await ctx.replyWithHTML(`Спасибо за ваше потраченное время. Мы свяжемся с вами в ближайшее время😊`, {
            reply_markup: Markup.keyboard([
                [Markup.callbackButton('📍Где находится Monday?')]
            ]).resize(),
        })

        db.all(`SELECT * FROM users WHERE chat_id = ?`, [ctx.message.chat.id], (err, row) => {
            if (err)
                return console.error(err.message);
            let obj = row[0];
            axios.post('http://localhost:3000/users', {
                name: obj.full_name,
                phone: obj.phone_number,
                phone_second: null,
                advert: "528",
                course: "10",
                birthday: "2023-01-01",
                email: "",
                seller: 5,
                description: "",
                state: 9
            }).then(resp => {
                console.log(resp.data);
            }).catch(error => {
                console.log(error);
            });
        })
    } catch (e) {
        console.error(e);
    }
})

composer.hears("записаться на курс 📱Мобильная разработка", async (ctx) => {
    try {
        await ctx.replyWithHTML(`Спасибо за ваше потраченное время. Мы свяжемся с вами в ближайшее время😊`, {
            reply_markup: Markup.keyboard([
                [Markup.callbackButton('📍Где находится Monday?')]
            ]).resize(),
        })

        db.all(`SELECT * FROM users WHERE chat_id = ?`, [ctx.message.chat.id], (err, row) => {
            if (err)
                return console.error(err.message);
            let obj = row[0];
            axios.post('http://localhost:3000/users', {
                name: obj.full_name,
                phone: obj.phone_number,
                phone_second: null,
                advert: "528",
                course: "20",
                birthday: "2023-01-01",
                email: "",
                seller: 5,
                description: "",
                state: 9
            }).then(resp => {
                console.log(resp.data);
            }).catch(error => {
                console.log(error);
            });
        })
    } catch (e) {
        console.error(e);
    }
})

composer.hears("записаться на курс 🏠3D Max", async (ctx) => {
    try {
        await ctx.replyWithHTML(`Спасибо за ваше потраченное время. Мы свяжемся с вами в ближайшее время😊`, {
            reply_markup: Markup.keyboard([
                [Markup.callbackButton('📍Где находится Monday?')]
            ]).resize(),
        })

        db.all(`SELECT * FROM users WHERE chat_id = ?`, [ctx.message.chat.id], (err, row) => {
            if (err)
                return console.error(err.message);
            let obj = row[0];
            axios.post('http://localhost:3000/users', {
                name: obj.full_name,
                phone: obj.phone_number,
                phone_second: null,
                advert: "528",
                course: "23",
                birthday: "2023-01-01",
                email: "",
                seller: 5,
                description: "",
                state: 9
            }).then(resp => {
                console.log(resp.data);
            }).catch(error => {
                console.log(error);
            });
        })
    } catch (e) {
        console.error(e);
    }
})

module.exports = composer