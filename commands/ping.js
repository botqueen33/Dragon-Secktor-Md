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
const Secktor = require('../lib')
const os = require('os')
Secktor.cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        await citel.reply('*_Testing Status o 🐉 Dragon-MD-V3 ❗_*');
        var final = new Date().getTime();
        return await citel.reply('⚕️ Dragon MD Status ⚕️\n\n☢️ *ꜱᴘᴇᴇᴅ :-* ' + (final - inital) + ' ms\n⏱️ *ᴜᴘᴛɪᴍᴇ :-* ${runtime(process.uptime())} \n📟 *ᴍᴇᴍᴏʀʏ ᴜꜱᴀɢᴇ :-* ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}');
    }
);
