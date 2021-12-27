const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "도움말",
    execute(message, args) {
        const Embed = new MessageEmbed()
            .setTitle('접두사는 p! 에요!')
            .setTitle(`\np!인증\np!유튜브\np!랜덤숫자(숫자)\np!질문\np!한강온도\np!bmi(키)(몸무게)\np!유튜브 검색(제목or이름)\np!청소(지울갯수)\np!채널닫기\np!채널열기\np!계산기\np!구글검색[검색어]\np!출첵\np!출첵 순위\np!출첵 횟수\np!돈줘\np!도박[배팅 금액]\np!잔액\np!미션\np!순위표`)
            .setColor("BLUE")
            .setTimestamp()
            message.channel.send({ embeds: [Embed] })
    }
}