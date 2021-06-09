const express = require('express');
const server = express();
const cors = require('cors');



server.use(express.json());
server.use(cors());
const pitchesRouter = require('./pitches/pitches-router');



server.use('/api/pitches',pitchesRouter);

server.get('/',(req,res)=>{
    res.send({message:`Hello bubblegum`})
});

module.exports = server;
