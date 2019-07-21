/*CMD
  command: /checkbalance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: what is his ID?
  keyboard: 
  aliases: 
CMD*/

if(user.username=="ToonDoge_Support"){
let otherid = data.message;

let balans = Libs.ResourcesLib.anotherUserRes("balans", otherid);
Bot.sendMessage("User's balance: " + balans.value()+" Doge");
}else{
Bot.sendMessage("Only admin can run this command");
}


