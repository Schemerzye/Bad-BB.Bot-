/*CMD
  command: /new
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 👤 account
CMD*/

let id = user.telegramid;
Api.getChatMember({
chat_id:"@toondoge_payments", user_id: id, on_result :"/checkinbal"})
//Bot.sendMessage(inspect(options));
