const db = require('../data/db-config');

const get = ()=>{
    let query = db('pitches');
    return query
}
module.exports ={
    get
}