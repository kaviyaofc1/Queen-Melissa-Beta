const fs = require('fs')
const chalk = require('chalk')

//Api Website\\ 
global.APIs = {
    zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
    'https://zenzapis.xyz': 'a4060c904b',
}


global.OWNER_REACT = '🧑🏻‍💻'
global.REACT_NUMBER = '94775418384'

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['94775418384'] //ur owner number
global.ownername = "🎭🇱🇰 KAVIYA OFC 🇱🇰🎭" //ur owner name
global.ytname = "✨ᴍʏ ᴡʜᴀᴛꜱᴀᴘᴘ ɢʀᴏᴜᴘ✨: https://chat.whatsapp.com/F950olXvdc6JH4ZXoH0TQx" //ur yt chanel name
global.socialm = "GitHub: kaviyaofc1" //ur github or insta name
global.location = "SriLanka, Kaluthara, Panadura" //ur location

//bot bomdy 
global.owner = ['94775418384']
global.ownertag = '94775418384' //ur tag number
global.botname = '🎭🇱🇰 KAVIYA OFC 🇱🇰🎭' //ur bot name
global.linkz = "https://github.com/kaviyaofc1/Queen-Melissa-Beta" //your theme url which will be displayed on whatsapp
global.websitex = "https://github.com/kaviyaofc1/Queen-Melissa-Beta" //ur website to be displayed
global.botscript = 'https://github.com/kaviyaofc1/Queen-Melissa-Beta' //script link
global.reactmoji = "💖" //ur menu react emoji
global.themeemoji = "🎸" //ur theme emoji
global.packname = "🔰𝙺𝙰𝚅𝙸𝚈𝙰 𝙾𝙵𝙲" //ur sticker watermark packname
global.author = "ＭＲ.K A V I Y A ＯＦＣ" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("https://telegra.ph/file/a8a94d212fd52906b3c8d.jpg") //ur thumb pic
global.log0 = fs.readFileSync("https://telegra.ph/file/a8a94d212fd52906b3c8d.jpg") //ur logo pic
global.err4r = fs.readFileSync("https://telegra.ph/file/a8a94d212fd52906b3c8d.jpg") //ur error pic
global.thumb = fs.readFileSync("https://telegra.ph/file/a8a94d212fd52906b3c8d.jpg") //ur thumb pic

//damtabase
global.premium = ['94775418384'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿']
global.sp = '⚜'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin! 🇱🇰',
    botAdmin: 'Bot Must Be Admin First! 🇱🇰',
    owner: 'This Feature Is Only For Owner! 🇱🇰',
    group: 'Feature Used Only For Groups! 🇱🇰',
    private: 'Features Used Only For Private Chat! 🇱🇰',
    bot: 'This Feature Is Only For Bot 🇱🇰',
    wait: 'In wait 🇱🇰',
    linkm: 'Where is the link? 🇱🇰',
    error: 'Error!!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
global.rpg = {
    darahawal: 100,
    besiawal: 15,
    goldawal: 10,
    emeraldawal: 5,
    umpanawal: 5,
    potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
