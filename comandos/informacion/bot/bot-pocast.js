const { ChatInputCommandInteraction, Client, EmbedBuilder} = require('discord.js')

module.exports = {
    name: 'bot-pocasts',
    description: 'Obtener la redes Sociales De Foco de Locura',
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
                    .setTitle('Explorando Con Locura・Medios de comunicación Pocast')
                    .setDescription('¡Síguenos en las redes sociales a continuación!')
                    //.setThumbnail('https://i.imgur.com/r7x1y90.jpg')
                    .addFields([
                        {
                            name: 'Spotify',
                            value: '[Link](https://open.spotify.com/show/45SmLXRD4ZsKvioZRFVLys)',
                            inline: true
                        },
                        {
                            name: 'Apple Podcat:',
                            value: '[Link](https://podcasts.apple.com/us/podcast/foco-de-locura-podcast/id1634665109)',
                            inline: true
                        },
                        {
                            name: 'Google Podcat:',
                            value: '[Link](https://cutt.ly/TZc5k4V)',
                            inline: true
                        },
                        {
                            name: 'Amazon Music:',
                            value: '[Link](https://cutt.ly/HZc5DcV)',
                            inline: true
                        },
                        {
                            name: 'Deezer',
                            value: '[Link](https://www.deezer.com/es/show/3878957)',
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