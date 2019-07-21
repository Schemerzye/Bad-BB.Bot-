/*CMD
  command: /oncheckmember
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){
Bot.sendMessage("click me to use me");
return
}else{

//Bot.sendMessage(inspect(options)); 
let user = options.result.status;
if(user=="member"){
Bot.runCommand('/num');
}else{
Bot.runCommand('/see');
}
}
