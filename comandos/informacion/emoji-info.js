const { ChatInputCommandInteraction, Client, EmbedBuilder } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'emoji-info',
    description: 'obtén in formación sobre un emoji',
    category: 'información',
    options: [
        {
            name: 'emoji',
            description: 'proporciona un emoji personalizado del servidor',
            type: 3,
            require: true,
        },
    ],

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {

        const { user, guild, options } = interaction

        const emoji = options.getString('emoji')
        const regex = emoji.replace(/^<a?:\w+:(\d+)>$/, '$1')
        const emojis = guild.emojis.cache.find((emj) => emj.name === emoji || emj.id === regex)

        if (!emojis) {

            return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setColor(client.color)
                        .setDescription(`⚠ | Lo siento ${user} tienes que proporcionar un emoji del servidor valido!`)
                ],
                ephemeral: true
            })
        } else {

            await emojis.fetchAuthor().then((autor) => {

                const comprobar = (bool) => bool ? 'Si' : 'No'
                const uso = (bool) => bool ? `\`<a:${emojis.name}:${emojis.id}>\`` : `\`<:${emojis.name}:${emojis.id}>\``

                const embed_1 = new EmbedBuilder()
                    .setColor(client.color)
                    .setTitle(`Información de ${emojis.name}`)
                    .setThumbnail(`${emojis.url}`)
                    .addFields(
                        [
                            {
                                name: `Información General`,
                                value: `Nombre: ${emojis.name}\nID: ${emojis.id}\nautor: ${autor.tag}\nAuthor ID ${autor.id}\nCreado: ${moment(emojis.createdTimestamp).format('LT')} ${moment(emojis.createdTimestamp).format('LL')} ${moment(emojis.createdTimestamp).fromNow()}\nAccesoble por: ${emojis.roles.cache.map((rol) => rol.name).join(', ') || 'Todos'}\nUrl: [Link](${emojis.url})`,
                                inline: false
                            },
                            {
                                name: `Otra información`,
                                value: `Require dos puntos: ${comprobar(emojis.requiresColons)}\nEliminalble: ${comprobar(emojis.deletable)}\nAnimado: ${comprobar(emojis.animated)}\nGestionado: ${comprobar(emojis.managed)}`,
                                inline: false
                            },
                            {
                                name: `Uso`,
                                value: `${uso(emojis.animated)}`,
                                inline: false
                            },
                        ]
                    )
                    .setFooter({ text: `Solicitado por: ${user.tag}`, iconURL: `${user.displayAvatarURL({ dynamic: true })}` })
                    .setTimestamp()

                return interaction.reply({ embeds: [embed_1] })
            })
        }
    }
}