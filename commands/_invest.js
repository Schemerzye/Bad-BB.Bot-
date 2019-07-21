/*CMD
  command: /invest
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Tell me the amount you want to reinvest

minimum reinvest is 50 Doge
  ANSWER
  keyboard: 
  aliases: 
CMD*/

time = new Date();
time = time.toLocaleString();

let balans = Libs.ResourcesLib.userRes("balans");
let ghs = Libs.ResourcesLib.userRes("ghs");
let amount = parseFloat(message);
let daily = ghs.value() * 0.2;

if(amount=="/start"){
Bot.runCommand('/start');
return
}

if(amount=="👥 Referrals"){
Bot.runCommand('/referrals');
return
}

let username = user.username;
if(!username){
user.username = user.first_name;
}

if(amount=="✨ Power"){
Bot.runCommand('/deponow');
return
}

if(amount=="👤 Account"){
Bot.runCommand('/ance');
return
}

if(amount=="⚙ Setting"){
Bot.runCommand('/setting');
return
}

if(amount=="💵 Payment"){
Bot.runCommand('/payout');
return
}

if(amount=="❓ About Us"){
Bot.runCommand('/about');
return
}

if(amount<50){
Bot.sendMessage("❌You can not reinvest "+amount+" Doge");
return;
}

if(amount>balans.value()){
Bot.sendMessage("❌Not enough Doge in balance to reinvest");
return
}

if(balans.value()<50){
Bot.sendMessage("❌Minimum reinvestment is 50 Doge, you only have "+balans.value()+" Doge");
return;
}

if(amount>=50){
  if(balans.value()>=amount){
    balans.exchangeTo(ghs, { remove_amount: amount, add_amount: amount  } )
         Bot.sendMessage("✔️Funds successfully reinvested " + amount+" Doge, you received "+amount+" Mh/s");
    balans.growth.add({value: 0.2*ghs.value() , interval:86400 });
    Api.sendMessage({ chat_id: "@toondoge_payments", text: "♻️New Reinvestment\n"+time+"\n\nUser : " + user.username + " \nhas reinvested " + amount + " Doge, \n\nHe/She will receive "+amount+" Mh/s"}); 
    
    Bot.sendMessage("♻️Reinvestment started\nAmount::"+amount+" Doge\nMh/s: "+amount+" Mh/s");


  }
      }

