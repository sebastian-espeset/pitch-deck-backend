const db = require('../data/db-config');

const get = ()=>{
    let query = db('pitches');
    return query
};
const insert = (pitch) =>{
    return db('pitches')
        .insert(pitch);
    
};

module.exports ={
    get,
    insert
};
