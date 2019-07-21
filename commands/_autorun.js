/*CMD
  command: /autorun
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: give his id for autorun his balance growth
  keyboard: 
  aliases: 
CMD*/

let userid = data.message;
Bot.run( {
command: "/growth",
run_after: 60,//for 60 seconds 
user_id: userid
} );

