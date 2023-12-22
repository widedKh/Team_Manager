const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');
require('dotenv').config();
app.use(cors());
app.use(express.json());                          
app.use(express.urlencoded({ extended: true })); 
require('./config/mongoose.config'); 
require('./routes/player.routes')(app);

server.listen(8002, () => {
    console.log("Listening at Port 8002")
})
