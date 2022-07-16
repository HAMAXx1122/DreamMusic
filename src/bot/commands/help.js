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

**__Music Commands__**
Play - Skip - NowPlaying - Loop - Queue - lyrics
Join - Pause - Resume - Radio - Stop - Fiter
Prefix - Leave - Volume
**__Info Comannds__**
Info - Ping - Invite - 
Support

 


Invite Me **[ \`Invite\` ](https://discord.com/api/oauth2/authorize?client_id=873989388302946344&permissions=414530771264&scope=bot)** Need Help Join Our Support Server **[ \`Support\` ](https://discord.gg/TfBAUPCCY2)** 
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
