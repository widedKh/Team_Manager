const PlayerController = require('../controllers/player.controller');


module.exports = (app) => {
    
    app.post('/api/player', PlayerController.createPlayer); 
    app.get('/api/player', PlayerController.getAllPlayers);
    app.get('/api/player/:id', PlayerController.getPlayer);
    app.put('/api/player/:id', PlayerController.updatePlayer);
    app.delete('/api/player/:id', PlayerController.deletePlayer);
}