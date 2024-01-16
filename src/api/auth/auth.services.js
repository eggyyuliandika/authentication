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

// this function used to be soft delete tokens after usage.
function deleteRefreshToken(id) {
  return db.refreshToken.update({
    where: {
      id,
    },
    data: {
      revoked: true,
    },
  });
}





module.exports = {
  addRefreshTokenToWhitelist,
  findRefreshTokenById,
 deleteRefreshToken,
  // revokeTokens,
};
