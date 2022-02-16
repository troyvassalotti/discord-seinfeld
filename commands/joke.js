const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('joke')
        .setDescription('Replies with joke!'),
    async execute(interaction) {
        await interaction.reply("What's the deal with airline food?");
    },
};
