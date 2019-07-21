/*CMD
  command: /setupnow
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: tell me your private key
  keyboard: 
  aliases: 
CMD*/

let publickey = User.getProperty("publickey");
let privatekey = data.message;

Libs.CoinPayments.setPrivateKey(privatekey);
Libs.CoinPayments.setPublicKey(publickey);

// Get your BB Api Key from Bots.Business App in Profile
Libs.CoinPayments.setBBApiKey('swYMcbuBGRNs_qm8YTeCDg7799V8ZXMjp4oSF_iF');

Bot.sendMessage("setup done");
