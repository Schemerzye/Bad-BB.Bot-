/*CMD
  command: /progress
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let balans = Libs.ResourcesLib.userRes("balans");

Bot.sendMessage("Growth Progress: (" + balans.growth.progress()+" %)\nProcess "+balans.growth.title());
