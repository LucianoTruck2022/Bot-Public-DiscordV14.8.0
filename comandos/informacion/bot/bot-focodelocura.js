const { ChatInputCommandInteraction, Client, EmbedBuilder} = require('discord.js')

module.exports = {
    name: 'bot-focodelocura',
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

        //try {

            return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setColor(client.color)
                    .setTitle('Foco de Locura・Medios de comunicación social')
                    .setDescription('¡Síguenos en las redes sociales a continuación!\n¡Todas Nuestras Redes Sociales son @FocoDeLocura!')
                    //.setThumbnail('https://i.imgur.com/r7x1y90.jpg')
                    .addFields([
                        {
                            name: 'YouTube',
                            value: '[Link](https://www.youtube.com/@focodelocura)',
                            inline: true
                        },
                        {
                            name: 'Instagram',
                            value: '[Link](https://www.instagram.com/focodelocura/)',
                            inline: true
                        },
                        {
                            name: 'Facebook:',
                            value: '[Link](https://www.facebook.com/focodelocura)',
                            inline: true
                        },
                        {
                            name: 'TikTok:',
                            value: '[Link](https://www.tiktok.com/@focodelocura)',
                            inline: true
                        }
                    ])
                    .setFooter({
                        //iconURL: ('https://i.imgur.com/d1BQg3W.png'),
                        text: client.user.username
                    })/**/
                    //.setTimestamp()
                ],
                ephemeral: true
            })
        /*} catch (error) {
            console.log(error)
        }*/
    }
}