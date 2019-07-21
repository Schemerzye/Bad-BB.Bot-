/*CMD
  command: /growth
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ghs = Libs.ResourcesLib.userRes("ghs");
let balans = Libs.ResourcesLib.userRes("balans");

balans.growth.add({
value: ghs.value()*0.2,//for 5% daily
interval: 86400//for 24 hours
});
