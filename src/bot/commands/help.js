module.exports = {
    name: "help",
    cooldown: 3,
    description: 'Bot Orders',
    aliases: ["h"],
    run: async function(client, message, args, user) {
        try {
            const { MessageEmbed } = require('discord.js');
            var prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = require('../../config/bot').prefix;
            let help = new MessageEmbed()
                .setColor('BLUE')
               
               
                .setDescription(`
          **Music Command**
 %play` • `%stop` • `%skip`  • `%volume `
` %queue` • `%loop` • `%nowplaying `
` %radio` • `%filter` • `%lyrics` • `%resume`
` %leave` • `%Pause ` • `%Join` • `%
User&Info Command
` %bot` • `%support` • `%invite` • `%ping`

[ `invite` ](https://discord.com/api/oauth2/authorize?client_id=830265742795866162&permissions=2048&scope=bot) 
[ `support` ](https://discord.gg/JZSpq4BSDS)
[ `website Cooming Soon`]()
 `)

              
         
            setTimeout(() => {
                message.channel.send({
                    embed: help
                })
            }, 500);
        } catch (err) {
            console.log(err)
        }
    }
};
