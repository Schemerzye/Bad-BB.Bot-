/*CMD
  command: /withdraw
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Your payout address is `<wallet>`

Tell me the amount you want to cash out

Your withdraw will be sent to your wallet
(typically within an hour )

Minimum : 50 DOGE
Maximum : <balance> DOGE
  ANSWER
  keyboard: ❌Cancel❌
  aliases: 
CMD*/

if(chat.chat_type!="private"){
Bot.sendMessage("click me to use me");
return
}else{

time = new Date();
time = time.toLocaleString();
let msg = data.message;
let balans = Libs.ResourcesLib.userRes("balans");
let wallet = User.getProperty("wallet");
let amounts = balans.value();
let widrawn = Libs.ResourcesLib.userRes("widrawn");
let ghs = Libs.ResourcesLib.userRes("ghs");

if(msg=="/start"){
Bot.runCommand('/start');
return
}
let username = user.username;
if(!username){
user.username = user.first_name;
}

if(msg=="👥 Referrals"){
Bot.runCommand('/referrals');
return
}

if(msg=="✨ Power"){
Bot.runCommand('/deponow');
return
}

if(msg=="👤 Account"){
Bot.runCommand('/ance');
return
}

if(msg=="⚙ Setting"){
Bot.runCommand('/setting');
return
}

if(msg=="💵 Payment"){
Bot.runCommand('/payout');
return
}

if(msg=="❓ About Us"){
Bot.runCommand('/about');
return
}

if(msg=="❌Cancel❌"){
Bot.runCommand('/num');
return
}

if(balans.value()<msg){
Bot.sendMessage("❌Not Enough Balance, you need atleast 50 Doge in your balance or above\n\nBalance: "+amounts+" Doge");
return
}

if(msg<50){
Bot.sendMessage("❌You can not withdraw " + msg + " Doge");
return
}

if(amounts>=50){
balans.removeAnyway(parseFloat(msg));
widrawn.add(parseFloat(msg));
Bot.sendMessage("💵 Withdrawal Succesful\nWe're sending your payment right now\n\nPlease allow up to 48hours to be completed"); 

Api.sendMessage({ chat_id: "@toondoge_payments", text: "🏧New Withdrawal\n"+time+"\n\nUser : " + user.username + " \nhas withdrawn " + msg + " Doge to wallet: \n"+wallet+"\n\nTRANSACTION ID:\nhttps://dogechain.info/address/"+wallet}); 

Bot.sendMessageToChatWithId(855163433, "`"+user.telegramid+"` has Withdrawn\n\nAmount: "+msg+" Doge\nWallet:\n`"+wallet+"`\nHis balance: "+balans.value()+" Doge\nMhs: "+ghs.value()+" Mhs");

if(widrawn.value()>=ghs.value() * 2.0){
ghs.set(0);
widrawn.set(0);
Bot.sendMessage("200% ROI has been accomplished\n\nYour Investment has been expired because you did not invest for a long time and you got 200% ROI already, thank you for investing with us, invest again by pressing Power");
Bot.runCommand('/growth');
}




}else{

Bot.sendMessage("❌ You don't have the minimum 50 Doge for withrawal, the minimum withdrawal is 50 Doge and your balance is " + amounts+ " Doge");
}
}

