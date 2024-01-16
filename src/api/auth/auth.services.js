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



module.exports = {
  addRefreshTokenToWhitelist,
  // findRefreshTokenById,
  // deleteRefreshToken,
  // revokeTokens,
};
