const chalk = require('chalk');
const figlet = require("figlet");

module.exports = async function(client) {
    console.log(chalk.yellow.bold(figlet.textSync("jano")));
    await console.log(chalk.red.bold(client.user.tag) + chalk.blue.bold("Is Ready"));
await client.user.setActivity(`Dhelp | ${client.guilds.cache.size} server`);
    await client.user.setStatus("idle");
}
