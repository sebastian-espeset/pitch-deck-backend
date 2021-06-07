const express = require('express');
const Pitches = require('./pitches-model');
const router = express.Router();

router.get('/',(req,res)=>{
    Pitches.get()
        .then((Pitches)=>{
            res.status(200).json(Pitches)
        })
        .catch((err)=>{
            res.status(400).json({message:`Error: ${err}`})
        })
})

module.exports = router;