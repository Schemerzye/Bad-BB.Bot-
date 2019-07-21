/*CMD
  command: /setting
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: ⚙ setting
CMD*/

if(chat.chat_type!="private"){
Bot.sendMessage("click me to use me");
return
}else{

let wallet = User.getProperty("wallet");

if(!wallet){
wallet = "not set yet";
}

var buttons = [
    [ {title: "💳 Set Wallet", command: "/setwallet" } ]
]
Bot.sendInlineKeyboard(buttons, "➕Your DOGE wallet is\n " + wallet);
}


