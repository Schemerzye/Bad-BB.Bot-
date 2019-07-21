/*CMD
  command: /payout
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 💵 payment
CMD*/

let balans = Libs.ResourcesLib.userRes("balans");
let wallet = User.getProperty("wallet");

if(!wallet){
Bot.sendMessage("Your withdraw address is not set. Please set your wallet in Setting");
return
}

if(balans.value()<50){
Bot.sendMessage("😔 To withdraw, you need at least 50 DOGE or above");
}else{
Bot.runCommand('/withdraw');
}
