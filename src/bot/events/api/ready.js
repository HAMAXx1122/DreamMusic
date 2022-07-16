const chalk = require('chalk');
const figlet = require("figlet");

module.exports = async function(client) {
    console.log(chalk.yellow.bold(figlet.textSync("jano")));
    await console.log(chalk.red.bold(client.user.tag) + chalk.blue.bold("Is Ready"));
await client.user.setActivity(`Rhelp |${client.guilds.cache.size}Servers,Users ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)},`)
    await client.user.setStatus("online");
}
