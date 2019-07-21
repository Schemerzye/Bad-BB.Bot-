/*CMD
  command: /ance
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){
Bot.sendMessage("click me to use me");
return
}else{

let ghs = Libs.ResourcesLib.userRes("ghs");
let balans = Libs.ResourcesLib.userRes("balans");
User.setProperty("balance", balans.value(), "integer");
let daily = ghs.value() * 0.2;
let firstname = user.first_name;
Bot.sendMessage("👤" + firstname + " (" + user.username + ") " + "\n\n✨ Mining Power: " + ghs.value() + " Mh/s\n💰 Balance: " +  balans.value() + " Doge\n\nYour estimated daily reward, based on your Mining Power is 💵 " + daily + " Doge\n\nYou can improve your daily reward by depositing or by getting more referrals ✅\n\nPress Referrals to get more referrals ");
var buttons = [
    [ {title: "💰Reinvest from Balance", command: "/reinvest" } ]
]
Bot.sendInlineKeyboard(buttons, "Press this button to reinvest from account balance to Mh/s");
}



