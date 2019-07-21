/*CMD
  command: /onwalletcreation
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Bot.sendMessage(inspect(options));

let depowallet = User.getProperty("depowallet");

if(depowallet){
Bot.sendMessage("💳Buy Lifetime Mining Power 💳\n\nCurrent Mh/s price: 1.00 DOGE, while estimated daily reward is 💸 0.2000000 DOGE per Mh/s\n\n\nYou can purchase any amount of Mh/s by simply sending your Dogecoin(s) to your personal deposit address. \n\n\nMinimum deposit amount: 50 Doge\n\nYour deposit will be credited to your account after 3 network confirmations\n\nbelow is your personal deposit address");
Bot.sendMessage("`"+depowallet+"`");
}
else{
let depowallet = options.result.address;
User.setProperty("depowallet", depowallet, "string");
Bot.sendMessage("💳Buy Lifetime Mining Power 💳\n\nCurrent Mh/s price: 1.00 DOGE, while estimated daily reward is 💸 0.2000000 DOGE per Mh/s\n\n\nYou can purchase any amount of Mh/s by simply sending your Dogecoin(s) to your personal deposit address.\n\n\nMinimum deposit amount: 50 Doge\n\nYour deposit will be credited to your account after 3 network confirmations\n\nbelow is your personal deposit address");
Bot.sendMessage("`"+depowallet+"`");
}


