const { clean } = require('knex-cleaner')

exports.seed = function (knex) {
  return knex('pitches').insert([
    {
      pitch_name:'Finns mercenaries',
    },
    {
      pitch_name:'Jakes dogwalking service'
    },
    {
      pitch_name:'Princess Bubblegums Pharmacology'
    }

  ])
}
