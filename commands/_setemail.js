/*CMD
  command: /setemail
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: What is your email address?
  keyboard: 
  aliases: 
CMD*/

let email = data.message;

if(email=="/start"){
Bot.runCommand('/start');
return
}

if(email=="👥 Referrals"){
Bot.runCommand('/referrals');
return
}

if(email=="✨ Power"){
Bot.runCommand('/power');
return
}

if(email=="👤 Account"){
Bot.runCommand('/account');
return
}

if(email=="⚙ Setting"){
Bot.runCommand('/setting');
return
}

if(email=="💵 Payment"){
Bot.runCommand('/withdraw');
return
}

if(email=="❓ About Us"){
Bot.runCommand('/about');
return
}

if(email.length>10){
User.setProperty("email", data.message, "string");
Bot.sendMessage("✔️Email is set successfully, Press power again");
}else{
Bot.sendMessage("❌Invalid Email Address❌");
return
}


