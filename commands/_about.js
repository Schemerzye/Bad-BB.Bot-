/*CMD
  command: /about
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ❓ about us
CMD*/

if(chat.chat_type!="private"){
Bot.sendMessage("click me to use me");
return
}else{

var st = data.statistics;

msg= st.user_chats_count;

Bot.sendMessage("About Us\n\n🎊 Official Launched:\nJuly 14, 2019 \n👤 Members: " + msg + "\n\nPayment Channel: @toondoge_payments\nChat:@toondoge_community\nSupport : @ToonDoge_Support\n");
}



