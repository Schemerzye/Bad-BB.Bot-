/*CMD
  command: /broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send your message now
  keyboard: 
  aliases: 
CMD*/

if(user.username=="ToonDoge_Support"){
let msg = "📣News📣\n\n" + data.message;
Bot.sendMessageToAllPrivateChats(msg);
Bot.sendMessage("✅Message sent to all active members");
}else{
Bot.sendMessage("You are not an admin");
}


