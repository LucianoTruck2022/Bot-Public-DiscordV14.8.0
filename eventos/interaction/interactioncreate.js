const { CommandInteraction, Client, InteractionType, EmbedBuilder } = require("discord.js");
const { ApplicationCommand } = InteractionType;
const blacklistdb = require('../../schemas/blacklist');
const config = require('../../botconfig/config.json');

module.exports = {
  name: "interactionCreate",

  /**
   *
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const { user, guild, commandName, member, type } = interaction;
    if (!guild || user.bot) return;
    if (type !== ApplicationCommand) return;

    let blacklist = await blacklistdb.findOne().catch((error) => {});

    const command = client.commands.get(commandName);

    if (!command) {
      return interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setColor(client.color)
            .setDescription("⚠ | Ocurrió un error al ejecutar el comando"),
        ],
        ephemeral: true,
      });
    }

    if (blacklist) {
      const usuario = blacklist.Usuarios.find((u) => u.userid === user.id);
      if (usuario) {
        return interaction.reply({
          embeds: [
            new EmbedBuilder()
              .setColor(client.color)
              .setTitle("Lista negra de usuario")
              .setDescription(
                `⚠ | Los siento ${user} has sido agregado  a la lista negra\n\n*Tiempo:* <t:${parseInt(
                  usuario.tiempo / 1000
                )}:R>\n*Razon:*\`${
                  usuario.razon
                }\`\n* si esto es un error contactar con !LucianoTruck#3210*`
              ),
          ],
          ephemeral: true,
        });
      }

      const servidor = blacklist.Servidores.find((u) => u.serverid === guild.id);
      if (servidor){

        return interaction.reply({
            embeds: [
              new EmbedBuilder()
                .setColor(client.color)
                .setTitle("Lista negra de servidor")
                .setDescription(
                  `⚠ | Los siento ${user} has sido agregado  a la lista negra\n\n*Tiempo:* <t:${parseInt(
                    servidor.tiempo / 1000
                  )}:R>\n*Razon:*\`${
                    servidor.razon
                  }\`\n* si esto es un error contactar con !LucianoTruck#3210*`
                ),
            ],
            ephemeral: true,
          });
      }
    }

    if (command.owner) {

      if(user.id !== config.owners.nincaId){
        return interaction.reply({
          embeds: [
            new EmbedBuilder()
            .setColor(client.color)
            .setDescription(`⚠ | Los siento ${user} este comando solo puede ser utilizado por !LucianoTruck#3210`)
          ],
          ephemeral: true
        })
      }
    }

    if (command.UserPerms && command.UserPerms.length !== 0) {
      if (!member.permissions.has(command.UserPerms)) {
        return interaction.reply({
          embeds: [
            new EmbedBuilder()
              .setColor(client.color)
              .setDescription(
                `⚠ | Necesitas \`${command.UserPerms.join(
                  ","
                )}\`para ejecutar este comando`
              ),
          ],
          ephemeral: true,
        });
      }
    }

    if (command.BotPerms && command.BotPerms.length !== 0) {
      if (!member.permissions.has(command.BotPerms)) {
        return interaction.reply({
          embeds: [
            new EmbedBuilder()
              .setColor(client.color)
              .setDescription(
                `⚠ | Necesito \`${command.BotPerms.join(
                  ","
                )}\`para ejecutar este comando`
              ),
          ],
          ephemeral: true,
        });
      }
    }

    command.execute(interaction, client);
  },
};
