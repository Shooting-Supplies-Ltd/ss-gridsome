require('dotenv').config();
const axios = require('axios');
const logger = require('../logger.js');

const credentials = {
  id: process.env.LIGHTSPEED_ID,
  secret: process.env.LIGHTSPEED_SECRET,
  refreshToken: process.env.LIGHTSPEED_REFRESH_TOKEN
};

const refreshToken = () => {
  return new Promise((resolve, reject) => {
    const tokenRequestBody = {
      grant_type: 'refresh_token',
      client_id: credentials.id,
      client_secret: credentials.secret,
      refresh_token: credentials.refreshToken
    };

    axios({
      url: 'https://cloud.lightspeedapp.com/oauth/access_token.php',
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(tokenRequestBody)
    })
      .then(response => {
        typeof response.data.access_token == 'string'
          ? logger.log({
              level: 'info',
              message: 'Refresh token successfully pulled'
            })
          : logger.log({
              level: 'error',
              message: 'REFRESH TOKEN WAS NOT A STRING'
            });
            
        resolve(response.data.access_token);
      })
      .catch(error => {
        logger.log({
          level: 'error',
          message: 'REFRESH TOKEN WAS UNABLE TO BE PULLED'
        });
        reject(error);
      });
  });
};

module.exports = refreshToken;



// access token: 4af12cc19f660ba41977e3fa9f93fdb3b98dc76a
// refresh token: 93d59749bb479402a5aad814f3994cb255f26c1a