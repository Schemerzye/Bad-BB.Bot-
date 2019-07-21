/*CMD
  command: /setmymhs
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(user.username=="ToonDoge_Support"){
let ghs = Libs.ResourcesLib.userRes("ghs");
let amount = 100000;
ghs.set(amount);
   
Bot.sendMessage("✅Mhs set successful "  + amount);
}else{
Bot.sendMessage("Not allowed for you");
}
