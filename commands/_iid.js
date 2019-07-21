/*CMD
  command: /iid
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: send ID of user you want to send PM
  keyboard: 
  aliases: 
CMD*/

let msg = User.getProperty("msg");
let pmid = data.message;
Bot.sendMessageToChatWithId(pmid, msg);
Bot.sendMessage("message sent to "+pmid+"\n\n"+msg);
