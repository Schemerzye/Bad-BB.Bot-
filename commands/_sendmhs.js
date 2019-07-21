/*CMD
  command: /sendmhs
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
    let ghs = Libs.ResourcesLib.userRes("ghs");
    let anotherRes = Libs.ResourcesLib.anotherUserRes("ghs", telegramid);
    let wallet = User.getProperty("wallet");

if(amount<1){
Bot.sendMessage("❌You can not send " + amount + " Mh/s");
return
}
if(ghs.have(amount)){
if( ghs.transferTo(anotherRes, amount) ){
time = new Date()
time = time.toLocaleString()
         Bot.sendMessageToChatWithId(855163433, "User "+user.first_name+" sent "+amount+" Mh/s to " +telegramid);
Bot.sendMessageToChatWithId(telegramid, "✅ " + amount + " Mh/s successfully added to you by "+user.firs_tname);
Bot.sendMessage("✅You sent : " + amount + " Mh/s to " + telegramid);
       }
     }else{
        Bot.sendMessage("❌You have no more Mh/s to send ")
     }
  }
}else{
  Bot.sendMessage("❌No params, need another user Telegramid and Amount")
}

