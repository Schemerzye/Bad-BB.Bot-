/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if(chat.chat_type!="private"){
Bot.sendMessage("click me to use me");
}else{
Api.getChatMember({
chat_id:"@toondoge_payments", user_id: user.telegramid, on_result :"/oncheckmember"});
}

function hello(message){
  let greetings = "Hello❕, " + 
  user.first_name + " " + 
  user.last_name + 
  "(" + user.username + ") ! \nTelegramID: " + 
  user.telegramid + " Welcome!\n\n";

  Bot.sendMessage(greetings + "\n" + message);
}

function doTouchOwnLink(){
  Bot.sendMessage("🚫You clicked your own link!");
}

function doAttracted(channel){
  hello("Referral: " + channel);
}

function doAtractedByUser(refUser){
  hello("Your Upline is " + 
    refUser.first_name + " @" + refUser.username);
let refUserRes = Libs.ResourcesLib.anotherUserRes("ghs", refUser.telegramid);
 Bot.sendMessageToChatWithId(refUser.chatId, 
    "@" + user.username + " joined in your link 👍\n\nyou will get 5% commission of his investments direct to your account balance");
}

function doAlreadyAttracted(){
  Bot.sendMessage("❌Welcome back🎧");
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);



