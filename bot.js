const instantBot = require('instant-bot');

instantBot({host: 'glitch', rate: '24 hours'}, (bot) => {
  bot.post("I'm up thanks to @Glitch.")
});