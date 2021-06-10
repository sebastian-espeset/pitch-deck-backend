const db = require('../data/db-config');

const get = ()=>{
    let query = db('pitches');
    return query
};

const insert = (pitch) =>{
     db('pitches').insert(pitch)
     .then(pitch=>{
        console.log(pitch)
     })
};

module.exports ={
    get,
    insert
};
