const Player = require('../models/player.model');   

module.exports.createPlayer = (request, response) => {
    
    Player.create(request.body) 
        .then(product => response.json(product))
        .catch(err => response.status(400).json(err));
}
module.exports.getAllPlayers = (request, response) => {
    Player.find({})
        .then(players => {
            console.log(players); 
            response.json(players);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}
module.exports.getPlayer = (request, response) => {
    Player.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err));
}
module.exports.updatePlayer = (request, response) => {
    Player.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPlayer => response.json(updatedPlayer))
        .catch(err => response.status(400).json(err))
}
module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}