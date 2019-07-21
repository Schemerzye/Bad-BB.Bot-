/*CMD
  command: /payment
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: send ID
  keyboard: 
  aliases: 
CMD*/

if(user.username=="ToonDoge_Support"){
let widid = parseFloat(message);
Bot.sendMessageToChatWithId(widid, "✔️ Payment has been sent\n\nwe will be glad if you will post your withdrawal proof in the group chat.\n\nHappy Earnings💯");
Bot.sendMessage("Message sent to " + widid);
}else{
Bot.sendMessage("Intruder Alert");
}


