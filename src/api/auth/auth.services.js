/* eslint-disable linebreak-style */
const { db } = require('../../utils/db');
const { hashToken } = require('../../utils/hashToken');

// this function used when we create a refresh token.
function addRefreshTokenToWhitelist({ jti, refreshToken, userId }) {
  return db.refreshToken.create({
    data: {
      id: jti,
      hashedToken: hashToken(refreshToken),
      userId,
    },
  });
}

// this function used to check if the token sent by the client is in the database.
function findRefreshTokenById(id) {
  return db.refreshToken.findUnique({
    where: {
      id,
    },
  });
}




module.exports = {
  addRefreshTokenToWhitelist,
  findRefreshTokenById,
  // deleteRefreshToken,
  // revokeTokens,
};
