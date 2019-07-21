/*CMD
  command: /deponow
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ✨ power
CMD*/

if(chat.chat_type!="private"){
Bot.sendMessage("click me to use me");
return
}else{

Libs.CoinPayments.createPermanentWallet({
  currency: "DOGE",
  label: "doges",
  onSuccess: "/onWalletCreation",
  onIncome: "/onIncome"
});
}


