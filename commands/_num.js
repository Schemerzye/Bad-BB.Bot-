/*CMD
  command: /num
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 🏠 Main Menu
  keyboard: 👤 Account\n✨ Power,💵 Payment,👥 Referrals\n⚙ Setting,❓ About Us
  aliases: back to menu 🔙, ❌cancel❌
CMD*/

if(chat.chat_type!="private"){
Bot.sendMessage("click me to use me");
return
}else{

let ghs = Libs.ResourcesLib.userRes("ghs");
let balans = Libs.ResourcesLib.userRes("balans");

let username = user.username;
if(!username){
username = user.first_name;
}

if(balans.growth.isEnabled()){
Bot.sendMessage("You will receive your profit when ("+balans.growth.progress().toFixed(0)+"%) becomes (100%)\n Process "+balans.growth.title());
}else{
balans.growth.add({value: ghs.value() * 0.2, interval:86400 });
Bot.sendMessage("Your daily earnings is "+ghs.value()*0.2+" Doge");
}
}

