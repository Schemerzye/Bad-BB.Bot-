/*CMD
  command: /setpublickey
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: tell me your public key
  keyboard: 
  aliases: 
CMD*/

let publickey = data.message;
User.setProperty("publickey", data.message, "string");
Bot.runCommand('/setupnow');
