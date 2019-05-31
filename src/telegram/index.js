
const Telegraf = require('telegraf');
const Telegram = require('telegraf/telegram')
const { createApolloFetch } = require('apollo-fetch');
const dotenv = require('dotenv');
dotenv.load({path: './../.env'});


const fetch = createApolloFetch({
 uri: 'http://127.0.0.1:3000/graphql',
});

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.context.db = {
    getScores: () => { return 42 }
};

bot.start((ctx) => {
    //On Start
    //console.log(JSON.stringify(ctx.chat))
     fetch({
        query: `mutation updateUserMutation($id: String!,$chatId: String!) {
            updateUser(id: $id, chatId: $chatId){
                id
            }
        }`,
        variables: { id: "5ceea293bea6782cccd6946e", chatId: ctx.chat.id },
       }).then(res => {
           console.log(res); 
       });
    
});

bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'));
// bot.on('text', (ctx) => {
//     const scores = ctx.db.getScores(ctx.message.from.username)
//     return ctx.reply(`${ctx.message.from.username}: ${scores}`)
// })
bot.hears('hi', (ctx) => {
    console.log(JSON.stringify(ctx.chat))
    return ctx.reply('Hey there')
});

const telegram = new Telegram(process.env.BOT_TOKEN)

telegram.sendMessage(264783106,"Hello");
bot.launch()

function sendMessageToChat(chatId,productId){
    telegram.sendMessage(chatId,productId);
}


module.exports = {
    bot: bot,
    sendMessageToChat: sendMessageToChat
}