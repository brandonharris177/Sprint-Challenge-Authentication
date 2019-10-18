const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('users');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  return db('users')
  .insert(user)
  .then(newuser => newuser)
}

function findById(id) {
  return db('users')
  .where({username}).first().then(user => user)
}