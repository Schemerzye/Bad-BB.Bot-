/*CMD
  command: /reflist
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let lib = Libs.ReferralLib

refList = lib.currentUser.refList.get();

let msg;
if(refList.length>0){
  msg = "Referral List: " + refList.length + "\n----";
  for(i in refList){
    user = refList[i];
    msg+= "\n👤 Username: @" + user.username + " / " + user.last_name + " , " + user.first_name + "";
  }
}else{
  msg = "❌";
}
Bot.sendMessage(msg);
