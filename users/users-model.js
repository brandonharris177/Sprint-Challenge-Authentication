const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('auth');
}

function findBy(filter) {
  return db('auth').where(filter);
}

async function add(user) {
  const [id] = await db('auth').insert(user);
//   console.log(`added user`, user)
  return findById(id);
}

function findById(id) {
  return db('auth')
    .where({ id })
    .first();
}