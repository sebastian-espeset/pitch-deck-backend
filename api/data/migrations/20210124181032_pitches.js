exports.up = async (knex) => {
  await knex.schema
    .createTable('pitches', (pitches) => {
      pitches.binary('file')
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('pitches')
}
