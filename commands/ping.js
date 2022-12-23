/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

//---------------------------------------------------------------------------
const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Secktor = require('../lib')
const Config = require('../config')
const { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, fetchJson,cmd, sck1 } = require("../lib");
let gis = require("g-i-s");
const axios = require('axios')
const speed = require('performance-now')
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)

Secktor.cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        await citel.reply('*_Pinging Dragon-MD-V3 ❗_*');
        var final = new Date().getTime();
        return await citel.reply('☢️ *ꜱᴘᴇᴇᴅ*\n ' + (final - inital) + ' ms');
    }
);


Secktor.cmd({
            pattern: "system",
            desc: "Help list",
            category: "general",
            react: "🐲",
            filename: __filename
        },
        async(Void, citel, text) => {
            var inital = new Date().getTime();
            await citel.reply(`*_Testing System Status of 🐉 Dragon-MD-V3 ❗_*`);
                var final = new Date().getTime();
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/COLOMBO')
                    .locale('id')
                const date = moment.tz('Asia/Colombo').format('DD/MM/YYYY')
                let str = `⚕️ Dragon MD System Status ⚕\n\n`
                str += `⏱️ *ᴜᴘᴛɪᴍᴇ :-* ${runtime(process.uptime())} 
📟 *ᴍᴇᴍᴏʀʏ ᴜꜱᴀɢᴇ :-* ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
📆 *ᴅᴀᴛᴇ :-* ${date}
⏰ *ᴛɪᴍᴇ :-* ${time}`

                let generatebutton = [{
                    buttonId: `${prefix}owner`,
                    buttonText: {
                        displayText: '🤵 ᴏᴡɴᴇʀ'
                    },
                    type: 1
                }]
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4,
                    buttons: generatebutton
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
    )