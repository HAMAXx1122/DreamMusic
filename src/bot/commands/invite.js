module.exports = {
    name: "invite",
    cooldown: 3,
    description: 'Bot Orders',
    run: async function(client, message, args, user) {
        try {
            const { MessageEmbed } = require('discord.js');
            var prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = require('../../config/bot').prefix;
            let help = new MessageEmbed()
                .setColor('BLUE')
               
               
                .setDescription(`
                
                **Invite, DreamMusic**
                
  **[ Invite Me Now , thanks ](https://discord.com/api/oauth2/authorize?client_id=830265742795866162&permissions=8&scope=bot)** 
   `);


              
         
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
