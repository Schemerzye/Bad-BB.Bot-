/*CMD
  command: /joined
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: joined ✅
CMD*/

if(chat.chat_type!="private"){
Bot.sendMessage("click me to use me");
return
}else{
Api.getChatMember({
chat_id:"@toondoge_payments", user_id: user.telegramid, on_result :"/him"})
//Bot.sendMessage(inspect(options));
}

