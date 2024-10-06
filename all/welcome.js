const fs = require('fs');
const { Telegraph } = require('./uploader');
const { getRandom, smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, delay, sleep } = require('./myfunc');
let setting = JSON.parse(fs.readFileSync('./config.json'));
const welcome2 = setting.auto_welcomeMsg;
const leave2 = setting.auto_leaveMsg;
const {
  proto,
  jidDecode,
  jidNormalizedUser,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  downloadContentFromMessage,
} = require('baileys');
const moment = require('moment-timezone');

module.exports.welcome = async (iswel, isleft, Skyzo, anu) => {
  try {
    const metadata = await Skyzo.groupMetadata(anu.id);
    const participants = anu.participants;
    const memeg = metadata.participants.length;
    const groupName = metadata.subject;
    const groupDesc = metadata.desc;

    for (let num of participants) {
      const fkontaku = { 
        key: { 
          participant: `0@s.whatsapp.net`, 
          ...(anu.id ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) 
        }, 
        message: { 
          'contactMessage': { 
            'displayName': ``, 
            'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;,;;;\nFN:,\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 
            'jpegThumbnail': setting.pathimg, 
            thumbnail: setting.pathimg, 
            sendEphemeral: true 
          } 
        } 
      };

      let pp_user, ppgroup;
      try {
        pp_user = await Skyzo.profilePictureUrl(num, 'image');
      } catch {
        pp_user = 'https://telegra.ph/file/bc71445af244e02458461.jpg';
      }

      try {
        ppgroup = await Skyzo.profilePictureUrl(anu.id, 'image');
      } catch {
        ppgroup = 'https://telegra.ph/file/bc71445af244e02458461.jpg';
      }

      if (anu.action == 'add' && (iswel || setting.auto_welcomeMsg)) {
        if (isSetWelcome(anu.id, set_welcome_db)) {
          var get_teks_welcome = await getTextSetWelcome(anu.id, set_welcome_db);
          var replace_pesan = get_teks_welcome.replace(/@user/gi, `@${num.split('@')[0]}`);
          var full_pesan = replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc);
          await Skyzo.sendMessage(anu.id, { text: `${full_pesan}`, mentions: [num] });
        } else {
          var text = `Hᴇʟʟᴏ 👋 @${num.split('@')[0]}\n> ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ${groupName}, \n> ${botname} ɢɪᴠᴇs ʏᴏᴜ sᴜᴄʜ ᴀ ᴘʟᴇᴀsᴜʀᴇ ᴡᴇʟᴄᴏᴍᴇ ️\n> ᴋɪɴᴅʟʏ ʀᴇᴀᴅ ᴛʜᴇ ɢᴄ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ \n> ${groupDesc}`;
   await Skyzo.sendMessage(anu.id, {
            document: fs.readFileSync('./package.json'),
            thumbnailUrl: 'https://telegra.ph/file/14f21fc7574b00a753376.jpg',
            mimetype: 'application/pdf',
            fileLength: 99999,
            pageCount: '100',
            fileName: `𝑨𝒓𝒄𝒉 𝑴𝒅 𝑨𝒊 ☘`,
            caption: text,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: false,
                title: `© Welcome Message`,
                body: `${botname}`,
                thumbnailUrl: 'https://telegra.ph/file/14f21fc7574b00a753376.jpg',
                sourceUrl: 'https://chat.whatsapp.com/HO2JGN8YHr9IOf4XOSRhGe',
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          });
        }
      } else if (anu.action == 'remove' && (isleft || setting.auto_leaveMsg)) {
        if (isSetLeft(anu.id, set_left_db)) {
          var get_teks_left = await getTextSetLeft(anu.id, set_left_db);
          var replace_pesan = get_teks_left.replace(/@user/gi, `@${num.split('@')[0]}`);
          var full_pesan = replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc);
          await Skyzo.sendMessage(anu.id, { image: { url: pp_user }, mentions: [num], caption: `${full_pesan}` });
        } else {
          var anubis = `Bʏᴇ 😔 @${num.split('@')[0]}\n> ʟᴇғᴛ ᴛʜᴇ ɢʀᴏᴜᴘ ${groupName} \n> ᴀᴅɪᴏs `;
          await Skyzo.sendMessage(anu.id, {
            document: fs.readFileSync('./package.json'),
            thumbnailUrl: 'https://telegra.ph/file/0eef78ef5583c31100d31.jpg',
            mimetype: 'application/pdf',
            fileLength: 99999,
            pageCount: '100',
            fileName: `𝑨𝒓𝒄𝒉 𝑴𝒅 𝑨𝒊 ☘`,
            caption: anubis,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: false,
                title: `© GoodBye Message`,
                body: `${botname}`,
                thumbnailUrl: 'https://telegra.ph/file/0eef78ef5583c31100d31.jpg',
                sourceUrl: 'https://chat.whatsapp.com/HO2JGN8YHr9IOf4XOSRhGe',
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.aDelete = async (setting, Skyzo, m) => {
  if (setting.antiDelete) {
    try {
      const dataChat = global.dbc;
      const mess = dataChat.find((a) => a.id == m.id);
      const mek = mess.m;
      const participant = mek.key.remoteJid.endsWith('@g.us') ? mek.key.participant : mek.key.remoteJid;
      console.log(participant);
      const froms = mek.key.remoteJid;
      await Skyzo.sendMessage(
        froms, {
          text: `「 *ANTI DELETE MESSAGE* 」
    
📛 *Name* : ${mek.pushName}
👤 *User* : @${mek.sender.split('@')[0]}
⏰ *Clock* : ${moment.tz('Africa/Lagos').format('HH:mm:ss')} WIB 
✍️ *MessageType* : ${mek.mtype}
    `,
          mentions: [participant],
        }, {
          quoted: m,
        }
      );

      await Skyzo.copyNForward(froms, mek, true);
      await delay(4000);
      let messek = dataChat.find((a) => a.id == m.id);
      for (let [i, te] of dataChat.entries()) {
        if (te.id === m.id) {
          dataChat.splice(i, 1); // Tim is now removed from "users"
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports.oneTime = async (setting, Skyzo, m) => {
  if (setting.antiViewOnce) {
    try {
      let teks = `「 *ANTI VIEWONCE MESSAGE* 」
      
📛 *Name* : ${m.pushName}
👤 *User* : @${m.sender.split('@')[0]}
⏰ *Clock* : ${moment.tz('Africa/Lagos').format('HH:mm:ss')} WIB  
✍️ *MessageType* : ${m.mtype}
💬 *Caption* : ${m.msg.caption ? m.msg.caption : 'no caption'}`;

      await Skyzo.sendTextWithMentions(m.chat, teks, m);
      await delay(500);

      Skyzo.copyNForward(m.chat, true, {
        readViewOnce: true,
        quoted: m,
      });
    } catch (err) {
      console.log(err);
    }
  }
};
