//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidURHQkxmRDc3ZVI0UVZhQXBNL1k5MHRyZGVpdDM0aEN5SXJLZ3ExTEZXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUU2SHF1S0ZzR2xWTlg3SGpuQjEzNW9jNkZGUDFKOG9wb2RVTXplN3YwRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHS1NZOFVBY3ZHRFI2bGFvd0YxMHBNMWxRbForR2dKVGUxdTBRNENPblVrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5S2g1SGUwRFpxOEZHWGxIbDVubU53N1kxQkVUaS9GU3NFNnJHNjRRdFhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllCdW9sVWlMQ0xRV3ZjajJJZk93R1d1bW9MeDU1VVhLQTJuaWh6SktjR3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1MZE9zbnpBdjFTV0tXUk04YmZla2xNcHQwYmFXU1hmVmZSbVgwQmNhRGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUpWS1R0MHBzNnRZWGY1c2tmRjdLRVcyaFkwbGsvYnZEUzNIcW5HUjBFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWxXQm84RW1yMnU0Z1hYSXhBRGEyYlFqblRqdnRNdkxRanhGcWJTK0ZGRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN2dGhTV3UvR0wzYXFodUpDVlBrWG1xQ1RQNm5oUGxGYmIrTkd4UVIwcWtFeEZIMmxIck1SRUc2aTZlMTFvUTdJMEk3OVBzUm9VMXh5akt6bkxMVGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcwLCJhZHZTZWNyZXRLZXkiOiIrL01tVjJZL2JURGRZcWhzMlFuVlRLRGYrY3VIdURlalJOeCtVUUFFcnpNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNzY5NzgyNDUxMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxRjA2NEE3REU5QTNERjk2NTg1QkQzNDI2NEU2NTYzMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI0MTIwMTU1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzc2OTc4MjQ1MTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREI1MkJGMkZDQjI3MDMyRDczOUQ5QzlCN0M0QkYwNTMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNDEyMDE1NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM3Njk3ODI0NTEwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg0ODM5QTU4Mzk5M0MzRDZCQTM0ODc0MTkyMjE1MUJCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjQxMjAxNTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNzY5NzgyNDUxMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyMjlENEFEQkUyOTIwNDQ4Q0FFN0FCOUNGQjhDNjgyRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI0MTIwMTU3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhN3NSMzRXRlNsR25jQlNPV1l2TGdnIiwicGhvbmVJZCI6IjI4YmY3NTU0LTVmNDYtNDM5ZS04ODllLTcyNmU5ODJjMjdkZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVDh0TURyRWFrL1ArRStZQXNzK1hmSWpEVjg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWVrUUtBUE9IbFpDZ1hCNUJTcjNIbFV6cVZVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNTM0ZWQUxZIiwibWUiOnsiaWQiOiIyMzc2OTc4MjQ1MTA6NzNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQsOpdG9uIE1peCBTaG9wIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJam9yS29GRU12NGo3WUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI2YlFxMGd4MzBENUtoVmNpNUxPUTV6WU5KN0VqK2FERHpYNUdWQS80b25NPSIsImFjY291bnRTaWduYXR1cmUiOiJmU0s3TGNJcTdubnNURit4NEUvUERRTW9YdUJOSlZhb2wvSUFGR1dEdm9lSndnRUJrdDBGVXorNmRCcVdjcExkd05YdTVsSkVGNlJheFJVdE9LUGVEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibS83RFRUZ1hhY2tVN0s3ZFYwOXVNSlU2Zyt3T0FnMjdoNE55aFdmVjUxZE5BTWxnZEQvWlFqN3JkSjVQcjVtbUJ3TnJPLzRncjVrUjhqWXBKVXdSZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2OTc4MjQ1MTA6NzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZW0wS3RJTWQ5QStTb1ZYSXVTemtPYzJEU2V4SS9tZ3c4MStSbFFQK0tKeiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDEyMDE1MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJNnIifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
