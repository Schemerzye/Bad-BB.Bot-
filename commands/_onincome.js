/*CMD
  command: /onincome
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let username = user.username;

if(!username){
user.username = user.first_name;
}

let depowallet = options.address;
let currency = options.currency;
let amount = options.amount;

let fiat_amount = options.fiat_amount;
let fiat_currency = options.fiat_coin;

let fee = options.fee;

let txn_id = options.txn_id

// see another fields by
// Bot.sendMessage(inspect(options));

//Bot.sendMessage(
   //"*Income to wallet:*" +
   //"\n`"+ depowallet + "`" +
   //"\n\n*Amount*:\n" +
//amount + " " + currency + " (" + fiat_amount + " " + fiat_currency + ")" +
   //"\n*Fee*: " + fee +
   //"\n\nTXN: `" + txn_id + "`"
//);


let ghs = Libs.ResourcesLib.userRes("ghs");
let balans = Libs.ResourcesLib.userRes("balans");

time = new Date();
time = time.toLocaleString();

if(amount>49){
ghs.add(amount)
Api.sendMessage({ chat_id: "@toondoge_payments", text: "💰New Investment\n"+time+"\n\nUser : " + user.username + " \nhas invested " + amount + " Doge, \n\nHe/She will receive "+amount+" Mh/s\n\nTRANSACTION ID:\n https://dogechain.info/tx/"+txn_id});

let referrer = Libs.ReferralLib.currentUser.attractedByUser();

if(referrer){
  let referrerRes = Libs.ResourcesLib.anotherUserRes("balans", referrer.telegramid);

  let refcom = amount * 0.05;

  referrerRes.add(refcom);
  Bot.sendMessageToChatWithId(referrer.telegramid, "🎉Congratulations "+user.first_name+" Invested "+amount+" Doge and You got 5% commission\n➕"+refcom+" Doge");
}

Bot.sendMessage("💸 Investment Started \n🔋Amount: "+amount+" Doge\nYou will receive "+amount+" Mh/s");

Bot.runCommand('/growth');
}else{
Bot.sendMessage("We received your deposit but we will not add it to your investment because it is below the minimum investment")
}




