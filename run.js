const Discord = require('discord.js');
const bot = new Discord.Client();
//These instructions are needed for the future https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token

//var admin = "<@261329374295359499>" 
//Enabe Dev mode in discord (User Settings -> Appearance) right click your name in any server, and click copy id, paste after the @ sign

bot.on('ready', () => {
	bot.user.setStatus("online", "!~help for commands");
	console.log("online status set");
	console.log("playing status set");
	bot.user.setUsername("Dankst3r");
});

bot.on('message', message => {

	if(message.content.startsWith("!~"))
		{
			if(message.author == admin)
				{
					//console.log("<Finger Fist Gaming>" + message.content);
					//insert your username in the operation signs
				} else {
				}
		} else {
			if(message.author == "<@326476837188272128>")
				{
					console.log("<Dankst3r>" + message.content)
				} else {
					if(message.content.startsWith("!~"))
					console.log(message.author + message.content);
				}
		}
	if(message.content === "!~howtomeme")
		{
			message.author.sendMessage("**How to Help Me get Memes!**\n\n**1.**Look for an image online that is ***REALLY*** funny.\n**2.**Right-Click the image and in the popup menu, click ''copy image address.''\n**3.**Email the link to remy.slosberg@live.com for review of the link and overall meme.");
		}
	if(message.content === "!~shutdown")
		{
			if(message.author == admin)
				{
					message.channel.sendMessage("Goodbye! Have (S)we(e)t Dreams");
					bot.user.setStatus("away")
					console.log("Online status set");
					bot.destroy((err) => {
						console.log(err);
					});
					console.log("Bot has shut down!");
				} else {
					
				}
		}
	if(message.content === "!~hidden")
		{
			message.channel.sendMessage("https://goo.gl/yMRcUG");
		}
	if(message.content === "!~about")
		{
			message.channel.sendMessage("**About Dankst3r**\n\n I give you fresh memes hand selected by the creator and the community!");
		}
	if(message.content === "!~thot")
		{
			message.channel.sendMessage(":regional_indicator_t: :regional_indicator_h: :regional_indicator_o: :regional_indicator_t:\n:regional_indicator_b: :regional_indicator_e:\n:regional_indicator_g: :regional_indicator_o: :regional_indicator_n: :regional_indicator_e: ");
		}
	if(message.content === "!~help")
		{
			message.channel.sendMessage("**Current commands:**\n\n*!~help* - Load this page.\n*!~credit* - Who made me?\n*!~about* - what is my purpose?\n*!~meme* - Just try it!~\n*!thot* - BEGONE! (might be buggy in certain cases, working on it!)\n*!~shutdown* - if a developer, will turn off the bot for everyone\n*!~howtomeme* - DMs you info on how to gather memes for the bot!\n\n ! is now !~ because other bots use ! for their commands, so it has been changed to eliminate interference.");
		}
	if (message.content === "!~credit")
		{
			message.channel.sendMessage("Dankst3r:\nCreated by: Remy Slosberg\nLanguage used: JavaScript (git pranked sahba!)\nLife creator has: None.\nReasons to live: None.\n\n Hope you enjoy this bot!");
		}
	if (message.content === "!~meme")
		{
			var randimg = Math.floor(Math.random() * 26) + 1
			if (randimg == 1)
				{
					message.channel.sendMessage("http://i.imgur.com/Y4IrhnX.jpg");
				}
			if (randimg == 2)
				{
					message.channel.sendMessage("http://i.imgur.com/RhB8BNN.jpg");
				}
			if (randimg == 3)
				{
					message.channel.sendMessage("http://i.imgur.com/8sP7wvD.jpg");
				}
			if (randimg == 4)
				{
					message.channel.sendMessage("http://i.imgur.com/1p62KyE.jpg");
				}
			if (randimg == 5)
				{
					message.channel.sendMessage("http://i.imgur.com/KinShBK.jpg");
				}
			if (randimg == 6)
				{
					message.channel.sendMessage("http://i.imgur.com/QYhXjwf.jpg");
				}
			if (randimg == 7)
				{
					message.channel.sendMessage("http://i.imgur.com/ZYrKFIT.png");
				}
			if (randimg == 8)
				{
					message.channel.sendMessage("http://i.imgur.com/gl6sqLD.jpg");
				}
			if (randimg == 9)
				{
					message.channel.sendMessage("http://i.imgur.com/OvLcZcz.jpg");
				}
			if (randimg == 10)
				{
					message.channel.sendMessage("http://i.imgur.com/ipp96v2.jpg");
				}
			if (randimg == 11)
				{
					message.channel.sendMessage("http://cdn.ebaumsworld.com/thumbs/gallery/604025/85286183.jpg")
				}
			if (randimg == 12)
				{
					message.channel.sendMessage("https://s-media-cache-ak0.pinimg.com/736x/14/80/66/14806673dafe7e68efd1692d2de9e3d6--dankest-memes-ever-the-dankest-of-memes.jpg");
				}
			if (randimg == 13)
				{
					message.channel.sendMessage("https://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/12724771_614537552018311_1659819414_n.jpg?ig_cache_key=MTE5Mjc0NjA4NTg1NDE2MDQxMQ%3D%3D.2");
				}
			if (randimg == 14)
				{
					message.channel.sendMessage("http://i2.kym-cdn.com/photos/images/newsfeed/001/210/465/515");
				}
			if (randimg == 15)
				{
					message.channel.sendMessage("https://s-media-cache-ak0.pinimg.com/736x/67/f3/a7/67f3a775ef3bea1c022c5b62d0741c63--dankest-memes-funny-memes.jpg");
				}
			if (randimg == 16)
				{
					message.channel.sendMessage("https://data.whicdn.com/images/261235712/original.jpg");
				}
			if (randimg == 17)
				{
					message.channel.sendMessage("http://i.imgur.com/c3JIa9T.jpg");
				}
			if (randimg == 18)
				{
					message.channel.sendMessage("https://thechive.files.wordpress.com/2016/06/dank-memes-for-the-weekend-32-photos-301.jpg?quality=85&strip=info&w=600");
				}
			if (randimg == 19)
				{
					message.channel.sendMessage("https://s-media-cache-ak0.pinimg.com/736x/73/63/8c/73638c9f5ad69a6c41a54ea572879a33--dankest-memes-not-funny.jpg");
				}
			if (randimg == 20)
				{
					message.channel.sendMessage("https://thechive.files.wordpress.com/2017/05/memes-35-photos-21.jpg?quality=85&strip=info&w=600");
				}
			if (randimg == 21)
				{
					message.channel.sendMessage("http://i.imgur.com/FLjlsTi.jpg");
				}
			if (randimg == 22)
				{
					message.channel.sendMessage("https://i.redd.it/kc8fl1m13jqy.jpg");
				}
			if (randimg == 23)
				{
					message.channel.sendMessage("https://media0.giphy.com/media/O9MbF5sHocC8U/giphy.gif");
				}
			if (randimg == 24)
				{
					message.channel.sendMessage("https://media0.giphy.com/media/XVfFQ2CNyRmV2/giphy.gif");
				}
			if (randimg == 25)
				{
					message.channel.sendMessage("http://i.imgur.com/xvsng0l.gif");
				}
			if (randimg == 26)
				{
					message.channel.sendMessage("https://media.tenor.com/images/c8620750bbd41041b86813b74a386c73/tenor.gif");
				}
		}
});

//bot token generated from your account (https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)
//bot.login("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log("bot logged in");
