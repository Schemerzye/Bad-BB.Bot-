/*CMD
  command: /removebalance
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
    let balans = Libs.ResourcesLib.userRes("balans");
    let anotherRes = Libs.ResourcesLib.anotherUserRes("balans", telegramid);
    let wallet = User.getProperty("wallet");

if(amount>1){
Bot.sendMessage("❌You can not remove " + amount + " Doge");
return
}
if(balans.have(amount)){
if( balans.transferTo(anotherRes, amount) ){
time = new Date()
time = time.toLocaleString()
         Bot.sendMessageToChatWithId(767229187, "User "+user.first_name+" removed "+amount+" Doge from " +telegramid);
Bot.sendMessageToChatWithId(telegramid, "✅ " + amount + " The admin has removed your unauthorized balance , FUCK YOU THIEF");
Bot.sendMessage("✅You REMOVED : " + amount + " Doge from " + telegramid+" his new balance is "+balans.value()+" Doge");
       }
     }else{
        Bot.sendMessage("❌You have no more Doge to send ")
     }
  }
}else{
  Bot.sendMessage("❌No params, need another user Telegramid and Amount")
}
}else{
Bot.sendMessage("Only Admin can execute this command");
}

