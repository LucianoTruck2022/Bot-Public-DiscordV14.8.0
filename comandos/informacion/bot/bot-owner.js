const { ChatInputCommandInteraction, Client, EmbedBuilder} = require('discord.js')

module.exports = {
    name: 'bot-owner',
    description: 'Obtener la información del creador del bot',
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
                    .setTitle('Información del creador del bot')
                    .setThumbnail('https://i.imgur.com/r7x1y90.jpg')
                    .addFields([
                        {
                            name: '👑・Nombre del propietario',
                            value: 'Luciano',
                            inline: true
                        },
                        {
                            name: '🏷・Discord tag',
                            value: '!LucianoTruck#3210',
                            inline: true
                        },
                        {
                            name: '🏢・Organización',
                            value: '[Castores Trucking](https://discord.gg/W3nFEqy67C)',
                            inline: true
                        },
                        {
                            name: '📡・Twitch',
                            value: '[LucianoTruck22](https://www.twitch.tv/lucianotruck22)',
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