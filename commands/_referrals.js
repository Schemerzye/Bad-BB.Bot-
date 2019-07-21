/*CMD
  command: /referrals
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 👥 referrals
CMD*/

if(chat.chat_type!="private"){
Bot.sendMessage("click me to use me");
return
}else{

let lib = Libs.ReferralLib;
let reflist = lib.currentUser.refList;
reflist = lib.currentUser.refList.get();
let reflink = Libs.ReferralLib.currentUser.getRefLink("TOONDOGE_BOT", "toon");
let earned = reflist.length * 5;

let msg;
if(reflist.length>0){
  msg = reflist.length;
}else{
  msg = "❌";
}

Bot.sendMessage("👥 Invite your friends and get:\n\n5% for each investment they make in account balance\n\nReferred Friends: " + msg + " \n➡️ Your referral link is: " + reflink);

var buttons = [
    [ {title: "🔖Referral List🔖", command: "/reflist" } ]
]
Bot.sendInlineKeyboard(buttons, "Click Here To See Your Referrals");
}


