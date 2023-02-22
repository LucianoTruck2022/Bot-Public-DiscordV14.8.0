const { ChatInputCommandInteraction, Client, EmbedBuilder} = require('discord.js')

module.exports = {
    name: 'bot-soyemiliojoker',
    description: 'Obtener la redes Sociales De Soy Emilio Joker',
    //userPerms: [''],
    //BotPerms: [''],
    category: 'informacion',

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client){
        const { user } = interaction

        //try {

            return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setColor(client.color)
                    .setTitle('⭐Soy Emilio Joker⭐・Medios de comunicación social')
                    .setDescription('¡Síguenos en las redes sociales a continuación!')
                    //.setThumbnail('https://i.imgur.com/r7x1y90.jpg')
                    .addFields([
                        {
                            name: 'Instagram',
                            value: '[Link](https://www.instagram.com/soyemiliojoker)',
                            inline: true
                        },
                        {
                            name: 'Tik Tok',
                            value: '[Link](https://www.tiktok.com/@soyemiliojoker)',
                            inline: true
                        },
                        {
                            name: 'YouTube',
                            value: '[Link](https://www.youtube.com/channel/UCzlWPjIjWRktYZsO1TVeBwQ)',
                            inline: true
                        },
                        {
                            name: 'Discord',
                            value: '[Link](https://discord.gg/saUyDqTqhh)',
                            inline: true
                        }
                    ])
                    .setFooter({ text: `Solicitado por: ${user.tag}`, iconURL: `${user.displayAvatarURL({ dynamic: true })}` })
                    .setTimestamp()
                ],
                ephemeral: true
            })
        /*} catch (error) {
            console.log(error)
        }*/
    }
}