const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    desc: "To get the menu.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menuMessage = ` 
 
*🌟👑 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂 𝗠𝗗 - 𝗠𝗮𝗶𝗻 𝗠𝗲𝗻𝘂 👑🌟*

*✨ 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂! ✨*

*📊 𝗕𝗼𝘁 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻:*
- ⏳ *𝗥𝘂𝗻𝘁𝗶𝗺𝗲:* ${runtime(process.uptime())}
- 👤 *𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲:* 𝗝𝗮𝗻𝗶𝘁𝗵 𝗥𝗮𝘀𝗵𝗺𝗶𝗸𝗮
- 📞 *𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿:* ${config.BOT_NUMBER}

*📥 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗦𝗲𝗰𝘁𝗶𝗼𝗻:*
- 🎵 `.song` - 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗮 𝘀𝗼𝗻𝗴
- 🎥 `.video` - 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗮 𝘃𝗶𝗱𝗲𝗼

*🔧 𝗠𝗮𝗶𝗻 𝗦𝗲𝗰𝘁𝗶𝗼𝗻:*
- 🟢 `.alive` - 𝗖𝗵𝗲𝗰𝗸 𝗶𝗳 𝘁𝗵𝗲 𝗯𝗼𝘁 𝗶𝘀 𝗮𝗰𝘁𝗶𝘃𝗲
- 📜 `.menu` - 𝗩𝗶𝗲𝘄 𝘁𝗵𝗶𝘀 𝗺𝗲𝗻𝘂
- ℹ️ `.about` - 𝗟𝗲𝗮𝗿𝗻 𝗮𝗯𝗼𝘂𝘁 𝘁𝗵𝗲 𝗯𝗼𝘁
- 💻 `.system` - 𝗩𝗶𝗲𝘄 𝘀𝘆𝘀𝘁𝗲𝗺 𝗶𝗻𝗳𝗼
- ⏱ `.runtime` - 𝗖𝗵𝗲𝗰𝗸 𝗯𝗼𝘁 𝗿𝘂𝗻𝘁𝗶𝗺𝗲

*🤖 𝗔𝗿𝘁𝗶𝗳𝗶𝗰𝗶𝗮𝗹 𝗜𝗻𝘁𝗲𝗹𝗹𝗶𝗴𝗲𝗻𝗰𝗲 𝗦𝗲𝗰𝘁𝗶𝗼𝗻:*
- 🧠 `.ai` - 𝗔𝗰𝗰𝗲𝘀𝘀 𝗔𝗜 𝗳𝗲𝗮𝘁𝘂𝗿𝗲𝘀



*© 𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏 - MD* 
*💻 GitHub:* github.com/Mrrashmika/Queen_Anju-MD `;
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:menuMessage},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})


