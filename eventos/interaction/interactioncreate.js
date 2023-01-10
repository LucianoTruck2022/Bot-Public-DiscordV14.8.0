const { CommandInteraction, Client, InteractionType, EmbedBuilder } = require('discord.js');
const { ApplicationCommand } = InteractionType

module.exports = {
    name: 'interactionCreate',

    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {

        const { user, guild, commandName, member, type } = interaction
        if (!guild || user.bot) return
        if (type !== ApplicationCommand) return

        const command = client.commands.get(commandName)

        if (!command) {

            return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setColor(client.color)
                        .setDescription('⚠ | Ocurrió un error al ejecutar el comando')
                ],
                ephemeral: true
            })
        }

        if (command.UserPerms && command.UserPerms.length !== 0) {

            if (!member.permissions.has(command.UserPerms)) {

                return interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor(client.color)
                            .setDescription(`⚠ | Necesitas \`${command.UserPerms.join(',')}\`para ejecutar este comando`)
                    ],
                    ephemeral: true
                })

            }
        }

        if (command.BotPerms && command.BotPerms.length !== 0) {

            if (!member.permissions.has(command.BotPerms)) {

                return interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor(client.color)
                            .setDescription(`⚠ | Necesito \`${command.BotPerms.join(',')}\`para ejecutar este comando`)
                    ],
                    ephemeral: true
                })

            }
        }

        command.execute(interaction, client)
    }
}