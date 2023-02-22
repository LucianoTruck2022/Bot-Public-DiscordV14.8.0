const { ChatInputCommandInteraction, Client, EmbedBuilder } = require('discord.js');
const { loadcommands, loadevents, loadhandlres } = require('../../../funciones/funcionesbot');

module.exports = {
    name: 'developers-reload',
    description: 'recargar las funciones del bot',
    UserPerms: ['Administrator'],
    BotPerms: ['Administrator'],
    Permissions: ['<@&1034338601422565458>'],
    Category: 'dueño',
    options: [
        {
            name: 'opciones',
            description: 'selecciona una de las opciones',
            type: 3,
            require: true,
            choices: [
                {
                    name: 'commandos',
                    value: 'commandos'
                },
                {
                    name: 'eventos',
                    value: 'eventos'
                },
                {
                    name: 'todo',
                    value: 'todo'
                },
            ]
        }
    ],
    owner: true,

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */

    async execute(interaction, client) {

        const { user, options } = interaction
        try {

            const opciones = options.getString('opciones')
            switch (opciones) {
                case 'commandos': {
                    loadcommands(client).then(() => {
                        return interaction.reply({
                            embeds: [
                                new EmbedBuilder()
                                    .setColor(client.color)
                                    .setDescription(`✅ | Commandos recargados con éxito`)
                            ],
                            ephemeral: true
                        })
                    }).catch((error) => { })

                } break
                case 'eventos': {
                    loadevents(client).then(() => {
                        return interaction.reply({
                            embeds: [
                                new EmbedBuilder()
                                    .setColor(client.color)
                                    .setDescription(`✅ | Eventos recargados con éxito`)
                            ],
                            ephemeral: true
                        })
                    })
                } break
                case 'todo': {
                    loadevents(client).then(() => {
                        loadhandlres(client).then(() => {
                            loadcommands(client).then(() => {
                                return interaction.reply({
                                    embeds: [
                                        new EmbedBuilder()
                                            .setColor(client.color)
                                            .setDescription(`✅ | Recargados todas las funciones del bot con éxito`)
                                    ],
                                    ephemeral: true
                                })
                            }).catch((error) => { })
                        }).catch((error) => { })
                    }).catch((error) => { })

                }
            }

        } catch (error) {
            console.log(error)
            return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setColor(client.color)
                        .setDescription(`⚠ | Los siento ${user} ocurrio un error al ejecutar el comando! `)
                ],
                ephemeral: true
            })
        }
    }
}