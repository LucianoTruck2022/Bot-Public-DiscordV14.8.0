const { model, Schema} = require('mongoose');

module.exports = model('stremrol', new Schema({

    serverName: String,
    serverId: String,
    rolname: String,
    rolId: String,
}))