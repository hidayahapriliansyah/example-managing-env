const path = require('path');
const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: path.resolve(__dirname, '../.env.local')});
} else if (process.env.NODE_ENV === 'stage') {
  dotenv.config({ path: path.resolve(__dirname, '../.env.stage')});
} else if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: path.resolve(__dirname, '../.env.prod')});
}

module.exports = {
  apiEndpoint: process.env.API_ENDPOINT,
};

