exports.up = async (knex) => {
  await knex.schema
    .createTable('pitches', (pitches) => {
      pitches.increments('pitch_id')
      pitches.string('pitch_name')
      pitches.timestamps(false, true)
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users')
}
