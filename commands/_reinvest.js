/*CMD
  command: /reinvest
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let balans = Libs.ResourcesLib.userRes("balans");

if(balans.value()<50){
Bot.sendMessage("😔 To reinvest, you need at least 50 DOGE");
}else{
Bot.runCommand('/invest');
}
