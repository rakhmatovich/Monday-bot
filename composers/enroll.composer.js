const { Composer, Markup } = require('telegraf')
const axios = require('axios');
const sqlite3 = require('sqlite3').verbose()

const composer = new Composer()
const db = new sqlite3.Database('./usersInfo.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
})

// db.run(`CREATE TABLE authorization(id INTEGER PRIMARY KEY, token)`)

// sql = `INSERT INTO authorization(token) VALUES(?)`;
// db.run(`INSERT INTO authorization(token) VALUES(?)`, ["defaultToken-6d7eb775e8bb871df41a008980133a0460501706"], (err) => {
//     if (err) return console.error(err.message);
// })

// db.all(`SELECT * FROM authorization`, [], (err, rows) => {
//     if (err) return console.error(err.message);
//     console.log(rows[rows.length - 1]);
// })

const button = [
    [Markup.callbackButton('📍Где находится Monday?')],
    [Markup.callbackButton('Связаться с Monday')]
]

const URI = 'https://crmneo.com/api/v1/academy/customer'
const sql = `SELECT * FROM users WHERE chat_id = ?`
const replyText = `Спасибо за ваше потраченное время. Мы свяжемся с вами в ближайшее время😊`
let token = ''

const auth = async () => {
    try {
        let data = JSON.stringify({
            "email": "jeffreydevoeinc@gmail.com",
            "password": "43215543215546643553234211"
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://crmneo.com/api/v1/users/sign-in',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        const res = await axios.request(config)
        // save db res.data.token
        db.run(`UPDATE authorization SET token = ? WHERE id = ?`, [res.data.token, '1'], (err) => {
            if (err) return console.error(err.message);
        })
        token = res.data.token

    } catch (error) {
        console.log(error);
    }
}

const getToken = async () => {
    // read db.token
    db.all(`SELECT * FROM authorization`, [], (err, rows) => {
        if (err) return console.error(err.message);
        token = rows[0]
    })
}
getToken()


const newEnroll = async (userName, userPhone, chosenCourse) => {

    console.log(token);

    let data = JSON.stringify({
        "name": userName,
        "phone": userPhone,
        "phone_second": null,
        "advert": "2",
        "course": chosenCourse,
        "birthday": "2023-01-01",
        "email": "",
        "seller": "",
        "description": "",
        "state": 9
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://crmneo.com/api/v1/academy/customer/',
        headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json'
        },
        data: data
    };

    const response = await axios.request(config)

    console.log(JSON.stringify(response.data));

}

composer.hears("записаться на курс 🤳SMM", async (ctx) => {
    await ctx.replyWithHTML(replyText, {
        reply_markup: Markup.keyboard(button).resize(),
    })
    try {
        db.all(sql, [ctx.message.chat.id], async (err, row) => {
            if (err) return console.error(err.message, 'user not found');
            let obj = row[0];
            try {
                await newEnroll(obj.full_name, obj.phone_number, "1")
            } catch (error) {
                if (error.response.status === 401) {
                    auth()
                    setTimeout(() => newEnroll(obj.full_name, obj.phone_number, "1"), 1000)
                } else {
                    console.log(error.response);
                }
            }
        })
    } catch (e) {
        console.error(e);
    }
})

composer.hears("записаться на курс 🧑‍🎨Графический дизайн", async (ctx) => {
    try {
        await ctx.replyWithHTML(replyText, {
            reply_markup: Markup.keyboard(button).resize(),
        })

        db.all(sql, [ctx.message.chat.id], async (err, row) => {
            if (err) console.error(err.message, 'user not found');
            let obj = row[0];
            try {
                await newEnroll(obj.full_name, obj.phone_number, "2")
            } catch (error) {
                if (error.response.status === 401) {
                    auth()
                    setTimeout(() => newEnroll(obj.full_name, obj.phone_number, "2"), 1000)
                } else {
                    console.log(error.response);
                }
            }
        })
    } catch (e) {
        console.error(e);
    }
})

composer.hears("записаться на курс 👨‍💻Бэкенд", async (ctx) => {
    try {
        await ctx.replyWithHTML(replyText, {
            reply_markup: Markup.keyboard(button).resize(),
        })

        db.all(sql, [ctx.message.chat.id], async (err, row) => {
            if (err)
                console.error(err.message, 'user not found');
            let obj = row[0];
            try {
                await newEnroll(obj.full_name, obj.phone_number, "8")
            } catch (error) {
                if (error.response.status === 401) {
                    auth()
                    setTimeout(() => newEnroll(obj.full_name, obj.phone_number, "8"), 1000)
                } else {
                    console.log(error.response);
                }
            }
        })
    } catch (e) {
        console.error(e);
    }
})

composer.hears("записаться на курс 👨‍💻Фронтенд", async (ctx) => {
    try {
        await ctx.replyWithHTML(replyText, {
            reply_markup: Markup.keyboard(button).resize(),
        })

        db.all(sql, [ctx.message.chat.id], async (err, row) => {
            if (err)
                console.error(err.message, 'user not found');
            let obj = row[0];
            try {
                await newEnroll(obj.full_name, obj.phone_number, "10")
            } catch (error) {
                if (error.response.status === 401) {
                    auth()
                    setTimeout(() => newEnroll(obj.full_name, obj.phone_number, "10"), 1000)
                } else {
                    console.log(error.response);
                }
            }
        })
    } catch (e) {
        console.error(e);
    }
})

composer.hears("записаться на курс 📱Мобильная разработка", async (ctx) => {
    try {
        await ctx.replyWithHTML(replyText, {
            reply_markup: Markup.keyboard(button).resize(),
        })

        db.all(sql, [ctx.message.chat.id], async (err, row) => {
            if (err)
                console.error(err.message, 'user not found');
            let obj = row[0];
            try {
                await newEnroll(obj.full_name, obj.phone_number, "20")
            } catch (error) {
                if (error.response.status === 401) {
                    auth()
                    setTimeout(() => newEnroll(obj.full_name, obj.phone_number, "20"), 1000)
                } else {
                    console.log(error.response);
                }
            }
        })
    } catch (e) {
        console.error(e);
    }
})

composer.hears("записаться на курс 🏠3D Max", async (ctx) => {
    try {
        await ctx.replyWithHTML(replyText, {
            reply_markup: Markup.keyboard(button).resize(),
        })

        db.all(sql, [ctx.message.chat.id], async (err, row) => {
            if (err)
                console.error(err.message, 'user not found');
            let obj = row[0];
            try {
                await newEnroll(obj.full_name, obj.phone_number, "23")
            } catch (error) {
                if (error.response.status === 401) {
                    auth()
                    setTimeout(() => newEnroll(obj.full_name, obj.phone_number, "23"), 1000)
                } else {
                    console.log(error.response);
                }
            }
        })
    } catch (e) {
        console.error(e);
    }
})

module.exports = composer