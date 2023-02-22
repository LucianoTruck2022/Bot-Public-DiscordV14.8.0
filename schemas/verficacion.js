const { model, Schema} = require('mongoose');

module.exports = model('verficacion', new Schema({

    serverName: String,
    serverId: String,
    roles: [String],
    mensajeId: String,
    canalName: String,
    canalId: String,
}))