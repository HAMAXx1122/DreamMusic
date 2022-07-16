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
             
               


    .addField("`My Name Is`", `**ReynaBot**`, true)

    .addField("`My ID`",  `**830265742795866162**`, true)
    
    .addField( "`My Prefix` ",`**R**`,true)
    
    .addField( "`What I Do` ",`**Play Music**`,true) 
            
    .addField( "`How Much Servers i Work in`",`**${client.guilds.cache.size}**`,true)

   .addField("`Language Program`",  `**Java Script**`, true)
            
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
