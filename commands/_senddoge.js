/*CMD
  command: /senddoge
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

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

if(amount<1){
Bot.sendMessage("❌You can not send " + amount + " Doge");
return
}
if(balans.have(amount)){
if( balans.transferTo(anotherRes, amount) ){
time = new Date()
time = time.toLocaleString()
         Bot.sendMessageToChatWithId(855163433, "User "+user.first_name+" sent "+amount+" Doge to " +telegramid);
Bot.sendMessageToChatWithId(telegramid, "✅ " + amount + " Doge successfully added to you by "+user.first_name);
Bot.sendMessage("✅You sent : " + amount + " Doge to " + telegramid);
       }
     }else{
        Bot.sendMessage("❌You have no more Doge to send ")
     }
  }
}else{
  Bot.sendMessage("❌No params, need another user Telegramid and Amount")
}

