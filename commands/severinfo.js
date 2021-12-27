const Discord = require('discord.js');

module.exports ={
    name: "서버정보",
    aliases: ["serverinfo"],
    description: "서버 정보를 표시함",
    async execute (message) {
    const server = new Discord.MessageEmbed()
    .setTitle(`${message.guild.name} 서버 정보`)
    .setDescription(
`       🖼 | 서버 이름: ${message.guild.name}

        📃 | 서버 주인: ${message.guild.owner.user.username}

        🎈 | 서버 생성일 : ${message.guild.createdAt}

        🔑 | 서버 아이디: ${message.guild.id}

        👩 | 서버 멤버: ${message.guild.memberCount}명

        🔴 | 서버 부스트 레벨: ${message.guild.premiumTier} 레벨

        🔴 | 부스트 개수: ${message.guild.premiumSubscriptionCount}개

        📢 | 규칙 채널: ${message.guild.rulesChannel} 

        🛠 | 시스템 채널: ${message.guild.systemChannel}

        💬 | 텍스트 채널: ${message.guild.channels.cache.filter(x => x.type === "text").size}개

        🔊 | 음성 채널: ${message.guild.channels.cache.filter(x => x.type === "voice").size}개`)
    .setThumbnail(message.guild.iconURL())
    .setColor('#ffffff')
    .setFooter(message.author.tag, message.author.displayAvatarURL());
    message.channel.send(server)
    }
}