const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.js");
client.config = config;
client.queue = new Map()

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  emotions = ["sad","happy","crying","neutral",""]
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    randnum = Math.floor(Math.random() * emotions.length);
    randword = emotions[randnum];
    console.log(`Lmao why i am Loading all files ;-;*`+randword+` bot noises ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(config.token);