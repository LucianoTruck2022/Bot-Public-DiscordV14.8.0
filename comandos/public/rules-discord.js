const { ChatInputCommandInteraction, Client, EmbedBuilder} = require('discord.js')

module.exports = {
    name: 'rules-discord',
    description: 'Reglas del servidor discord',
    //userPerms: [''],
    //BotPerms: [''],
    category: 'public',

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client){

        try {

            return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle('Discord server Rules/ Reglas del servidor discord')
                    .setColor(client.color)
                    .setDescription('§1 Sea respetuoso con todos en el servidor. No se tolerarán insultos ni abusos.\n\n§2 No se permite contenido/lenguaje inapropiado, irrespetuoso, dañino u ofensivo. Las blasfemias están permitidas, sin embargo, no en exceso.\n§2.1 La discriminación por motivos de raza, sexo, identificación personal, nacionalidad y similares dará lugar a la prohibición permanente.\n\n§3 No enviar spam. Esto incluye, entre otros, mensajes, emojis, reacciones, imágenes, GIF, tickets y saltos innecesarios entre canales.\n§3.1 Si su consulta o inquietud ha sido respondida en un ticket, no se le permite crear un ticket para esa consulta nuevamente con la esperanza de obtener un resultado alternativo.\n\n§4 No está permitido anunciarse a sí mismo. Esto incluye, entre otros, YouTube y videos, Twitch y transmisiones, redes sociales y VTC.\n§4.1 La publicidad puede resultar en una prohibición de los canales de medios.\n\n§5 Todos los canales tienen una descripción para su uso. Los canales solo deben usarse para el propósito previsto. Los medios solo deben publicarse en canales de medios.\n\n§6 No difunda información personal sobre usted u otros, incluidos, entre otros, nombres, correos electrónicos, direcciones, números de teléfono y fotos.\n\n§7 No intente ponerse en contacto con el personal de TruckersMP con respecto a un castigo que pueda haber recibido.\n§7.1 No comparta evidencia de prohibición / informe.\n\n§8 Los Términos de servicio y las Pautas de la comunidad de Discord se aplican en este servidor.\n§8.1 Esto incluye el uso de BetterDiscord o similar, que está prohibido.\n\n§9 Su apodo debe contener solo caracteres alfanuméricos y cumplir con la regla §2.\n\n§10 No discuta con los moderadores, en lugar de ello, plantee sus inquietudes al equipo de gestión.\n\n§11 Sea moderado en la forma de amenazar a los usuarios con castigos o actuar como un miembro del personal. Ser útil y dar recordatorios amistosos no está cubierto.\n§12 The administration reserves the right to ban anyone indefinitely from the server if it deems it necessary.\n\n§13 You can appeal your ban via a Management Team ticket, and the administration will review ban appeals.\n§13.1 It is only allowed to create a ban appeal. Subsequent ban appeals will be unavailable or will be rejected.\n\n§14 Avoidance of prohibitions is not allowed. If you are found to be evading a ban, regardless of the duration, all accounts will be permanently banned.\n§14.1 Use a new account to avoid the accumulation of penalties.')
                    .setImage('https://cdn.discordapp.com/attachments/973034587624194079/1010938518526234635/TRANSCAM_GROUP_STAFF.gif'),
                    new EmbedBuilder()
                    .setColor(client.color)
                    .setDescription('§1 Be respectful to everyone on the server. Insults or abuse will not be tolerated.\n\n§2 No inappropriate, disrespectful, harmful or offensive content/language is allowed. Profanity is allowed, however, not excessively.\n§2.1 Discrimination based on race, sex, personal identification, nationality and the like will result in a permanent ban.\n\n§3 Do not send spam. This includes, but is not limited to, messages, emojis, reactions, images, GIFs, tickets, and unnecessary jumping between channels.\n§3.1 If your question or concern has been answered in a ticket, you are not allowed to create a ticket for that question again in the hope of getting an alternative result.\n\n§4 It is not allowed to advertise yourself. This includes, but is not limited to, YouTube and videos, Twitch and streams, social media, and VTC.\n§4.1 Advertising may result in a ban from media channels.\n\n§5 All channels have a description for their use. Channels should only be used for their intended purpose. Media should only be published on media channels.\n\n§6 Do not spread personal information about yourself or others, including, but not limited to, names, emails, addresses, phone numbers, and photos.\n\n§7 Do not attempt to contact TruckersMP staff regarding a punishment you may have received.\n§7.1 Do not share ban/report evidence.\n\n§8 Discord Terms of Service and Community Guidelines apply on this server.\n§8.1 This includes the use of BetterDiscord or the like, which is prohibited.\n\n§9 Your nickname must contain only alphanumeric characters and comply with rule §2.\n\n§10 Do not argue with the moderators, instead raise your concerns with the management team.\n§11 Be moderate in the way you threaten users with punishment or act like a member of staff. Being helpful and giving friendly reminders is not covered.\n\n§12 The administration reserves the right to ban anyone indefinitely from the server if it deems it necessary.\n\n§13 You can appeal your ban via a Management Team ticket, and the administration will review ban appeals.\n§13.1 It is only allowed to create a ban appeal. Subsequent ban appeals will be unavailable or will be rejected.\n\n§14 Avoidance of prohibitions is not allowed. If you are found to be evading a ban, regardless of the duration, all accounts will be permanently banned.\n§14.1 Use a new account to avoid the accumulation of penalties.')
                    .setImage('https://cdn.discordapp.com/attachments/973034587624194079/1031041841363169351/d064de37336bf914ca68370acaf7cb90f0dab7bca076d3f59c2a5b57af732576.gif')
                ],
                //ephemeral: true
            })
        } catch (error) {
            console.log(error)
        }
    }
}