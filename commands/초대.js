const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
    name:"μ΄λ",
    execute(message){
        const embed = new MessageEmbed()
        .setTitle("π©μ΄λπ©")
        .setDescription("[ μλ λ²νΌμ λλ¬ λ΄μ μ΄λνμΈμ! ]")

        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle('LINK')
            .setLabel('μ΄λ')
            .setURL("https://discord.com/api/oauth2/authorize?client_id=923775973508411392&permissions=8&scope=bot%20applications.commands")
        )
        message.reply({embeds : [embed], components: [row]})
    }
}