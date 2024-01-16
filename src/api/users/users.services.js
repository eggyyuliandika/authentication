/* eslint-disable linebreak-style */
const bcrypt = require('bcrypt');
const { db } = require('../../utils/db');

// function to find user by email using (where)
function findUserByEmail(email) {
  return db.user.findUnique({
    where: {
      email,
    },
  });
}

// function to create new suer by adding email and password
function createUserByEmailAndPassword(user) {
  user.password = bcrypt.hashSync(user.password, 12);
  return db.user.create({
    data: user,
  });
}


