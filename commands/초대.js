const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
    name:"초대",
    execute(message){
        const embed = new MessageEmbed()
        .setTitle("📩초대📩")
        .setDescription("[ 아래 버튼을 눌러 봇을 초대하세요! ]")

        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle('LINK')
            .setLabel('초대')
            .setURL("https://discord.com/api/oauth2/authorize?client_id=923775973508411392&permissions=8&scope=bot%20applications.commands")
        )
        message.reply({embeds : [embed], components: [row]})
    }
}