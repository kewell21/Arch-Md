// Created by Ednut
// Thanks bro for using Arch-Md

require("./all/module.js")

global.owner = "2250546526324" //change
global.botname = "𝑨𝒓𝒄𝒉 KHALIL👑"  //change
global.ownername = "KHALIL BZ MOI 👄" //change
global.simbol = "♘"
global.footer = "`𝑮𝒉𝒂𝒔𝒕 𝑪𝒍𝒂𝒏 𝑮𝒓𝒆𝒚`" //Don't touch

global.ytchannel = "youtube.com/@Ednuthimself"

global.idchannel = "120363297279563825@newsletter"
global.linkgc = 'https://chat.whatsapp.com/HO2JGN8YHr9IOf4XOSRhGe'

global.packname = "𝐊𝚮𝚫𝐋𝚰𝐋🍆 𝐒𝚸𝚵𝚵𝐃🔥 𝑬𝑽𝑰𝑳😈"
global.author = "WhatsApp Bot"

global.anticall = false
global.welcome = false // check config.json

// if you have a image url input//

global.image = "https://tinyurl.com/5f7ajm2e"
global.image2 = 'https://tinyurl.com/5f7ajm2e'

// message settings don't edit might cause malfunction ‼️//

global.msg = {
"arch": "𝑾𝒉𝒂𝒕 𝒈𝒐𝒐𝒅 ?️",
"error": "Error !!",
"done": "Success Getting Data ✅", 
"wait": "🕧 Proccess, Please Wait", 
"group": "Group only❗", 
"private": "Feature can only be used in Private Chat❗", 
"admin": "what ? are you an administrator !!", 
"adminbot": "Bot must be admin first❗", 
"owner": "this a owner cmd only❗", 
"developer": "command for developer❗"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
