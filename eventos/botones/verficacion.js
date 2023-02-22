const {Client, MessageComponentInteraction, InteractionType, EmbedBuilder} = require('discord.js');
const verficardb = require('../../schemas/verficacion');

module.exports = {
    name: 'interactionCreate',

    /**
     * 
     * @param {MessageComponentInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client){

        const {guild, member, customId, type } = interaction

        if(type !== InteractionType.MessageComponent) return

        const id = ['sVerificar']
        if(!id.includes(customId)) return

        await verficardb.findOne({serverId: guild.id}).then(async (datos) => {

            await interaction.deferReply({ephemeral: true})

            if(!datos) {
                return interaction.editReply({
                    embeds: [
                        new EmbedBuilder()
                        .setColor(client.color)
                        .setDescription(`⚠ | Los siento ${member} no tengo datos en mi base de datos!`)
                    ]
                })
            }
            const rol = datos.roles.slice(0, 1).map((r) => r).join()

            if(member.roles.cache.has(rol)) {
                return interaction.editReply({
                    embeds: [
                        new EmbedBuilder()
                        .setColor(client.color)
                        .setDescription(`⚠ | Los siento ${member} ya te has verficado como miembro de la comunidad`)
                    ]
                })
            } else {

                await member.roles.add(datos.roles)
                
                return interaction.editReply({
                    embeds: [
                        new EmbedBuilder()
                        .setColor(client.color)
                        .setDescription(`✅ | Verficado con éxito en servidor`)
                    ]
                })
            }
        }).catch((error) => {

            if(error) {
                return interaction.editReply({
                    embeds: [
                        new EmbedBuilder()
                        .setColor(client.color)
                        .setDescription(`⚠ | Los siento ${member} ocurrió un error con el botó!`)
                    ]
                })
            }
        })
    }
}