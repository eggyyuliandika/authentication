/* eslint-disable linebreak-style */
const jwt = require('jsonwebtoken');

// Function to generate an access token. An access token is a key used to access information.
// The access token has a time expiration.
function generateAccessToken(user) {
  return jwt.sign({ userId: user.id }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '5m',
  });
}

// Function to generate a refresh token. A refresh token is a key used to recreate an access token,
// and refresh the token that has been owned previously.
function generateRefreshToken(user, jti) {
  return jwt.sign(
    {
      userId: user.id,
      jti,
    },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: '8h',
    },
  );
}

function generateTokens(user, jti) {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user, jti);

  return {
    accessToken,
    refreshToken,
  };
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  generateTokens,
};
