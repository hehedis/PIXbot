const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "hellothisisverification",
    execute(message, args) {
        const Embed = new MessageEmbed()
            .setTitle(`TRey#6558 (762833122382577684)`)
            .setColor("BLUE")
            .setTimestamp()
            message.channel.send({ embeds: [Embed] })
    }
}
