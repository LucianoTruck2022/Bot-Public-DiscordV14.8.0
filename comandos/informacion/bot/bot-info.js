const { ChatInputCommandInteraction, Client, EmbedBuilder} = require('discord.js')

module.exports = {
    name: 'bot-info',
    description: 'Obtener la información del bot',
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
                    .setTitle('ℹ・Información del bot')
                    .setDescription(`¡\`${client.user.username}\ es un bot con el que puedes ejecutar todo tu servidor! ¡Con no menos de más de 11 comandos, tenemos un gran bot con muchas opciones para mejorar tu servidor!`)
                    //.setThumbnail('https://i.imgur.com/d1BQg3W.png')
                    .addFields([
                        {
                            name: '🤖・Nombre del bot',
                            value: `\`${client.user.username}\``,
                            inline: true
                        },
                        {
                            name: '🆔・ID del bot',
                            value: `\`${client.user.id}\``,
                            inline: true
                        },
                        {
                            name: '💻・Shards',
                            value: '1 shards',
                            inline: true
                        },
                        {
                            name: '🔧・Desarrollador',
                            value: '<@722575141665505300>',
                            inline: true
                        },
                        {
                            name: '💻・Comandos',
                            value: '11 comandos',
                            inline: true
                        },
                        {
                            name: '🌐・Servidores',
                            value: '3 servidores',
                            inline: true
                        },
                        {
                            name: '📅・Creado',
                            value: '<t:1659330000:d>',
                            inline: true
                        },
                        {
                            name: '⌛・Ping de la API:',
                            value: `\`${client.ws.ping}\` ms`,
                            inline: true
                        },
                        {
                            name: '📋・Bot',
                            value: 'v0.1.0',
                            inline: true
                        },
                        {
                            name: '💻・Node.js',
                            value: 'v16.19.0',
                            inline: true
                        },
                        {
                            name: '📂・Discord.js',
                            value: 'v14.7.1',
                            inline: true
                        }
                    ])
                    /*.setFooter({
                        iconURL: ('https://i.imgur.com/d1BQg3W.png'),
                        text: client.user.username
                    })*/
                    .setTimestamp()
                ],
                ephemeral: true
            })
        /*} catch (error) {
            console.log(error)
        }*/
    }
}