// Created by Ednut
// Thanks bro for using Arch-Md

require("./all/module.js")

global.owner = "2347036214381" //change
global.botname = "𝑨𝒓𝒄𝒉 𝑴𝒅 𝑨𝒊"  //change
global.ownername = "ᴇᴅɴᴜᴛ" //change
global.simbol = "♘"
global.footer = "`𝑮𝒉𝒂𝒔𝒕 𝑪𝒍𝒂𝒏 𝑮𝒓𝒆𝒚`" //Don't touch others

global.ytchannel = "youtube.com/@Ednuthimself"

global.idchannel = "120363297279563825@newsletter"
global.linkgc = 'https://whatsapp.com/channel/0029VamspnPB4hdUnvLaIX17'

global.packname = "Arch Development"
global.author = "WhatsApp Bot"

global.anticall = false

// if you have a image url input//

global.image = "https://tinyurl.com/5f7ajm2e"
global.image2 = 'https://tinyurl.com/5f7ajm2e'

// message settings don't edit ‼️//

global.msg = {
"arch": "𝑾𝒉𝒂𝒕 𝒈𝒐𝒐𝒅 ?️",
"error": "Error !!",
"done": "Success Getting Data ✅", 
"wait": "🕧 Proccess, Please Wait", 
"group": "Group only❗", 
"private": "Feature can only be used in Private Chat❗", 
"admin": "what ? are you an administrator !!", 
"adminbot": "Bot must be admin first❗", 
"owner": "Owner only❗", 
"developer": "command for developer Developer❗"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
