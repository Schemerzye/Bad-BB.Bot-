/*CMD
  command: /removeghs
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(user.username=="ToonDoge_Support"){
if(params){
  let arr = params.split(" ");
  
  let telegramid = arr[0];
  let amount = arr[1]; 

if(!arr[1]){
    Bot.sendMessage("❌No amount/ID. Need amount/ID");
  }else{
    amount = parseFloat(amount);
    let ghs = Libs.ResourcesLib.userRes("ghs");
    let anotherRes = Libs.ResourcesLib.anotherUserRes("ghs", telegramid);
    let wallet = User.getProperty("wallet");

if(amount>1){
Bot.sendMessage("❌You can not remove " + amount + "  Mh/s");
return
}
if(balans.have(amount)){
if( balans.transferTo(anotherRes, amount) ){
time = new Date()
time = time.toLocaleString()
         Bot.sendMessageToChatWithId(767229187, "User "+user.first_name+" removed "+amount+" Mh/s from " +telegramid);
Bot.sendMessageToChatWithId(telegramid, "✅ " + amount + " The admin has removed your Mh/s of"+amount+" Mh/s");
Bot.sendMessage("✅You REMOVED : " + amount + " Mh/s from " + telegramid+" his new balance is "+balans.value()+" Mh/s");
       }
     }else{
        Bot.sendMessage("❌You have no more Mhs to send ")
     }
  }
}else{
  Bot.sendMessage("❌No params, need another user Telegramid and Amount")
}
}else{
Bot.sendMessage("Only Admin can execute this command");
}

