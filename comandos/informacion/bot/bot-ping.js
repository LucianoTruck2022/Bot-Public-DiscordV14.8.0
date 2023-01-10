const { ChatInputCommandInteraction, Client, EmbedBuilder} = require('discord.js')

module.exports = {
    name: 'bot-ping',
    description: 'respuesta del bot',
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
                    .setDescription(`📡 \`${client.ws.ping}\` ms`)
                ],
                ephemeral: true
            })
        /*} catch (error) {
            console.log(error)
        }*/
    }
}