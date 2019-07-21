/*CMD
  command: /him
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let user = options.result.status;
if(user=="member"){
Bot.runCommand('/num');
}else{
Bot.runCommand('/see');
}


