module.exports = {
    name: "info",
    cooldown: 3,
    description: 'Bot Orders',
    run: async function(client, message, args, user) {
        try {
            const { MessageEmbed } = require('discord.js');
            var prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = require('../../config/bot').prefix;
            let help = new MessageEmbed()
                .setColor('BLUE')
             
               


    .addField("`My Name Is`", `**Minus Bot**`, true)

    .addField("`My ID`",  `**830265742795866162**`, true)
    
    .addField( "`My Prefix` ",`**N**`,true)
    
    .addField( "`What I Do` ",`**Play Music**`,true) 
            
    .addField( "`Servers&Users`",`**${client.guilds.cache.size} Servers,Users ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}**`,true)

   .addField("`My Ping`",  `** ${Math.round(client.ws.ping)}**`, true)
            
    .addField( "`Owner And Developer` ",`<@!923278601686753281>`,true)          
         
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
