/*CMD
  command: /checkghs
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: give his id
  keyboard: 
  aliases: 
CMD*/

if(user.username=="ToonDoge_Support"){
let otherid = data.message;
let ghs = Libs.ResourcesLib.anotherUserRes("ghs", otherid);
Bot.sendMessage("User's Mhs: " + ghs.value()+" Mhs");
}else{
Bot.sendMessage("Only Admin can execute this command");
}


