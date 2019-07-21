/*CMD
  command: /sendpm
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: paste your message to the user
  keyboard: 
  aliases: 
CMD*/

if(user.username=="ToonDoge_Support"){
let msg = "✉️Message From Admin✉️\n\n" + data.message;
User.setProperty("msg", msg, "string");
Bot.runCommand('/iid');
}else{
return
}
