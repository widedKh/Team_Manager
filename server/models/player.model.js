const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minlength: [2, "Name must be at least 2 characters long"],
     },
     preferred_position: {
        type: String,
     },
     game_1_status: {
        type: String,
     },
     game_2_status: {
        type: String,
     },
     game_3_status: {
        type: String,
     },
    
}, { timestamps: true });
module.exports = mongoose.model('Player', PlayerSchema);