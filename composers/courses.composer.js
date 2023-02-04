const { Composer, Markup } = require('telegraf')
const composer = new Composer()


function coursesInfo(text) {
    composer.hears(text, async (ctx) => {
        try {
            await ctx.replyWithHTML(
                '<b>Наши курсы</b>', {
                reply_markup: Markup.keyboard([
                    [Markup.callbackButton('👨‍💻Фронтенд')],
                    [Markup.callbackButton('👨‍💻Бэкенд')],
                    [Markup.callbackButton('🧑‍🎨Графический дизайн')],
                    [Markup.callbackButton('📱Мобильная разработка')],
                    [Markup.callbackButton('🏠3D Max')],
                    [Markup.callbackButton('🤳SMM')],
                    [Markup.callbackButton('Получить больше информации о Monday и курсах')]
                ]).resize(),
            })
        } catch (e) {
            console.error(e);
        }
    })
}

coursesInfo('курсы')
coursesInfo('другие курсы')

// Фронтенд
composer.hears('👨‍💻Фронтенд', async (ctx) => {
    try {
        await ctx.replyWithHTML(`Программа обучения:

<b>HTML5 и CSS ✅</b>
Самое главное, мы научим вас создавать сайты, соответствующие действующим стандартам. Для этого мы вместе с вами изучим технологии HTML и CSS.

<b>JavaScript ✅</b>
Мы научим вас языку программирования JavaScript с нуля, шаг за шагом. В будущем вы сможете использовать этот язык программирования в различных областях IT: от веб-программирования до самых разных игр.

<b>React ✅</b>
Еще одна технология - это библиотека React JS. React JS позволяет нам создать идеальный интерфейсный веб-сайт на языке программирования JavaScript`, {
            reply_markup: Markup.keyboard([
                [Markup.callbackButton('записаться на курс 👨‍💻Фронтенд')],
                [Markup.callbackButton('другие курсы')],
                [Markup.callbackButton('Получить больше информации о Monday и курсах')]
            ]).resize(),
        })
    } catch (e) {
        console.error(e);
    }
})

// Бэкенд
composer.hears('👨‍💻Бэкенд', async (ctx) => {
    try {
        await ctx.replyWithHTML(`Программа обучения:

<b>HTML5 и CSS ✅</b>
Самое главное, мы научим вас создавать сайты, соответствующие действующим стандартам. Для этого мы вместе с вами изучим технологии HTML и CSS.

<b>Python ✅</b>
Мы изучим основные принципы и подходы фундаментального программирования на языке Python, которые вы сможете в будущем применить во многих сферах IT: от веб-программирования и приложений, до игр и разработки искусственного интеллекта.

<b>Django ✅</b>
Вишенкой на торте будет изучение фреймворка Django, который позволит Вам создавать полноценные и крутые сайты на Python. Вкупе с предыдущими знаниями, мы будем создавать сайты от А до Я с дизайном, логикой и воплощать интересные идеи по разработке.`, {
            reply_markup: Markup.keyboard([
                [Markup.callbackButton('записаться на курс 👨‍💻Бэкенд')],
                [Markup.callbackButton('другие курсы')],
                [Markup.callbackButton('Получить больше информации о Monday и курсах')]
            ]).resize(),
        })
    } catch (e) {
        console.error(e);
    }
})


// Графический дизайн
composer.hears('🧑‍🎨Графический дизайн', async (ctx) => {
    try {
        await ctx.replyWithHTML(`Программа обучения:

<b>Adobe Photoshop и Adobe Illustrator ✅</b>
Наш курс начнется с изучения самих программ и последующего изучения работы с растровой и векторной графикой. Мы научимся делать логотипы, баннеры, каталоги, разрабатывать фирменный стиль для компаний.

<b>UI/UX дизайн ✅</b>
Последющим шагом будет изучение дизайна приложений и его рисование. Здесь мы коснемся таких смежных тем, как: Теория цвета, симметрия и прочие. Мы так же научимся рисовать дизайн для мобильных приложений и сайтов.

<b>Figma ✅</b>
Последним этапом нашего обучения будет изучение платформы Figma и работы на ней. Здесь мы будем выкладывать наш дизайн, чтобы ваши будущие заказчики и работадатели могли увидеть ваши успехи и опыт.`, {
            reply_markup: Markup.keyboard([
                [Markup.callbackButton('записаться на курс 🧑‍🎨Графический дизайн')],
                [Markup.callbackButton('другие курсы')],
                [Markup.callbackButton('Получить больше информации о Monday и курсах')]
            ]).resize(),
        })
    } catch (e) {
        console.error(e);
    }
})



// Мобильная разработка
composer.hears('📱Мобильная разработка', async (ctx) => {
    try {
        await ctx.replyWithHTML(`Программа обучения:

<b>HTML5 и CSS ✅</b>
Самое главное, мы научим вас создавать сайты, соответствующие действующим стандартам. Для этого мы вместе с вами изучим технологии HTML и CSS.

<b>Dart ✅</b>
Научим вас универсальному языку Dart, созданный Google, как альтернатива JavaScript. На нем вы научитесь писать программные приложения для iOS и Android, кроме этого на Dart можно писать сайты,  утилиты командной строки (CLI) и серверные приложения.

<b>Flutter ✅</b>
Фреймворк Flutter написан на языке Dart .С помощью Flutter можно создавать приложения для iOS и Android, используя один язык программирования и общий код. Продукт «два в одном» представляет интерес для бизнеса, во-первых, как быстрое, но при этом качественное и надежное решение. А во-вторых, как возможность оптимизировать бюджет.`, {
            reply_markup: Markup.keyboard([
                [Markup.callbackButton('записаться на курс 📱Мобильная разработка')],
                [Markup.callbackButton('другие курсы')],
                [Markup.callbackButton('Получить больше информации о Monday и курсах')]
            ]).resize(),
        })
    } catch (e) {
        console.error(e);
    }
})


// 🏠3d Max
composer.hears('🏠3D Max', async (ctx) => {
    try {
        await ctx.replyWithHTML(`Программа обучения:

<b>3Ds MAX ✅</b>
Мы научим вас программе 3Ds MAX с нуля, шаг за шагом .В будущем вы освоите эту программу и будете работать в ведущих мировых 3D индустриях.

<b>Auto CAD ✅</b>
Самое главное, мы научим вас создавать (геймплан, 2D рисунок и макет) в соответствии с текущими стандартами.`, {
            reply_markup: Markup.keyboard([
                [Markup.callbackButton('записаться на курс 🏠3D Max')],
                [Markup.callbackButton('другие курсы')],
                [Markup.callbackButton('Получить больше информации о Monday и курсах')]
            ]).resize(),
        })
    } catch (e) {
        console.error(e);
    }
})


// SMM
composer.hears('🤳SMM', async (ctx) => {
    try {
        await ctx.replyWithHTML(`Программа обучения:

<b>Canva ✅</b>
С помощью Canva вы научитесь создавать дизайн. Вы можете создать свой индивидуальный дизайн для каждого проекта.

<b>Ads manager ✅</b>
Мы узнаем основы копирайтинга, написания постов разной тематики и размеров. Таргетинг - один из важнейших аспектов SMM-индустрии. В ходе курса мы научимся правильно настраивать таргетинг.

<b>Работа с килиентами ✅</b>
Клиенты являются источником жизненной силы этого бизнеса. Давайте посмотрим, как с ними заключать выгодные сделки.`, {
            reply_markup: Markup.keyboard([
                [Markup.callbackButton('записаться на курс 🤳SMM')],
                [Markup.callbackButton('другие курсы')],
                [Markup.callbackButton('Получить больше информации о Monday и курсах')]
            ]).resize(),
        })
    } catch (e) {
        console.error(e);
    }
})





// Получить больше информации о Monday и курсах

function getInfo(text) {
    composer.hears(text, async (ctx) => {
        try {
            await ctx.replyWithHTML(`Вы можете связаться с нами, позвонив по этому номеру и получить дополнительную информацию: +998936224020

<b><a href="t.me/mondayAcademy">Telegram</a></b> | <b><a href="https://www.instagram.com/monday.academy">Instagram</a></b> | <b><a href="https://www.tiktok.com/@monday_academy?_t=8ZGfPFSt9ve&_r=1">Tiktok</a></b>`, {
                disable_web_page_preview: true,
                reply_markup: Markup.keyboard([
                    [Markup.callbackButton('👨‍💻Фронтенд')],
                    [Markup.callbackButton('👨‍💻Бэкенд')],
                    [Markup.callbackButton('🧑‍🎨Графический дизайн')],
                    [Markup.callbackButton('📱Мобильная разработка')],
                    [Markup.callbackButton('🏠3d Max')],
                    [Markup.callbackButton('🤳SMM')],
                ]).resize(),
            })
        } catch (e) {
            console.error(e);
        }
    })
}

getInfo('Получить больше информации о Monday и курсах')
getInfo('Свяжись с нами')


module.exports = composer