/*CMD
  command: /setwallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Ok! Now send your Dogecoin wallet address here
  keyboard: 
  aliases: 
CMD*/

let wallet = data.message;

if(wallet=="/start"){
Bot.runCommand('/start');
return
}

if(wallet=="👥 Referrals"){
Bot.runCommand('/referrals');
return
}

if(wallet=="✨ Power"){
Bot.runCommand('/deponow');
return
}

if(wallet=="👤 Account"){
Bot.runCommand('/ance');
return
}

if(wallet=="⚙ Setting"){
Bot.runCommand('/setting');
return
}

if(wallet=="💵 Payment"){
Bot.runCommand('/payout');
return
}

if(wallet=="❓ About Us"){
Bot.runCommand('/about');
return
}
if(wallet.length==34){
Bot.sendMessage("✅Your wallet address updated successfully to " + wallet);
User.setProperty("wallet", data.message, "string");
}else{
Bot.sendMessage("❌ Invalid Wallet Addrress /setwallet");
return
}




