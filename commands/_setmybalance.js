/*CMD
  command: /setmybalance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(user.username=="ToonDoge_Support"){
let balans = Libs.ResourcesLib.userRes("balans");
let amount = 100000;
balans.set(amount);
   
Bot.sendMessage("✅Balance set successful "  + amount);
}else{
Bot.sendMessage("Only Admin can execute this command")
}


