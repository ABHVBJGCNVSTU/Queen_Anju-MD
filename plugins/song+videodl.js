const { cmd, commands } = require('../command');
const fg = require('api-dylux');
const yts = require('yt-search');

cmd({
    pattern: "song",
    desc: "To download songs.",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply("Please give me a URL or title.");

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `
⫷⦁[ * '-'_꩜ 𝘘𝘜𝘌𝘌𝘕 𝘈𝘕𝘑𝘜 𝘠𝘛 𝘚𝘖𝘕𝘎 𝘋𝘖𝘞𝘕𝘓𝘖𝘈𝘋𝘌𝘙 ꩜_'-' * ]⦁⫸
        
*I found this result...*

 ➥ Title: ${data.title}
 ➥ URL: ${data.url}
 ➥ Duration: ${data.timestamp}
 ➥ Views: ${data.views}
 ➥ Uploaded: ${data.ago}

> *© 𝘘𝘜𝘌𝘌𝘕 𝘈𝘕𝘑𝘜 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*
> *GitHub:* github.com/Mrrashmika/Queen_Anju-MD
`;

        // Send the initial message with the options
        await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });
        await reply("Reply 1 to get the audio file or 2 to get the document file.");

        // Wait for the user's reply
        const collected = await conn.waitForMessage({ quoted: mek });

        let down = await fg.yta(url);
        let downloadUrl = down.dl_url;

        // Check user's reply
        if (collected.body === '1') {
            // Send audio message
            await conn.sendMessage(from, { audio: { url: downloadUrl }, mimetype: "audio/mpeg" }, { quoted: mek });
        } else if (collected.body === '2') {
            // Send document as an MP3 file
            await conn.sendMessage(from, {
                document: { url: downloadUrl },
                mimetype: "audio/mpeg",
                fileName: data.title + ".mp3",
                caption: "*© 𝘘𝘜𝘌𝘌𝘕 𝘈𝘕𝘑𝘜 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*"
            }, { quoted: mek });
        } else {
            reply("Invalid option. Please reply with 1 or 2.");
        }

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});



//====================video_dl=======================

cmd({
    pattern: "video",
    desc: "To download videos.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
⫷⦁[ * '-'_꩜ 𝘘𝘜𝘌𝘌𝘕 𝘈𝘕𝘑𝘜 𝘠𝘛 𝘝𝘐𝘋𝘌𝘖 𝘋𝘖𝘞𝘕𝘓𝘖𝘈𝘋𝘌𝘙 ꩜_'-' * ]⦁⫸
        
*ɪ ꜰᴏᴜɴ ᴛʜɪꜱ ʀᴇsᴜʟᴛ...*

 ➥ ᴛɪᴛʟᴇ -  ${data.title}

 ➥ ᴜʀʟ - : ${data.url}

 ➥ ᴅᴜʀᴀᴛɪᴏɴ - : ${data.timestamp}

 ➥ ᴠɪᴇᴡs - : ${data.views}

 ➥ ᴜᴘʟᴏᴀᴅ ᴏɴ - ${data.ago}


> *© 𝘘𝘜𝘌𝘌𝘕 𝘈𝘕𝘑𝘜 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*
> *ɢɪᴛʜᴜʙ :* github.com/Mrrashmika/Queen_Anju-MD
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"*© 𝘘𝘜𝘌𝘌𝘕 𝘈𝘕𝘑𝘜 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('${e}')
}
})
