const { ChatInputCommandInteraction, Client, EmbedBuilder} = require('discord.js')
const ms = require('ms');

module.exports = {
    name: 'bot-ping',
    description: 'respuesta del bot',
    category: 'informacion',
    timeout: ms('1m'),

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
                    .setTitle('🏓・Pong')
                    .setDescription('Echa un vistazo a lo rápido que es nuestro bot')
                    .addFields([
                        {
                            name: '🤖・Latencia del Bot',
                            value: `${client.ws.ping}\ ms`,
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