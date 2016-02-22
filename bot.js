var Botkit = require('botkit');
var controller = Botkit.slackbot();
var bot = controller.spawn({
  token: "xoxb-22433004800-z4HqeKA85M1LLxa22AUfgNUc"
})
bot.startRTM(function(err,bot,payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});

controller.hears(["juice","^pattern$"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {
  bot.reply(message,'I think you mean HOOSE!');
});

controller.hears(["hoose","^pattern$"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {
  bot.reply(message,'Now we\'re talkin');
});

controller.hears(["hola","^pattern$"],["direct_message","direct_mention"],function(bot,message) {
  bot.reply(message,"Leave me alone, I\'m drinking hoose.");
});

controller.hears(["alex"],["direct_message","direct_mention","mention","ambient"],function(bot,message){
	bot.startConversation(message,function(err,convo) {
		convo.say("Alexander");
		convo.say("The great!");
	})
});

