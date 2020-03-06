const dotenv = require('dotenv');
const path = require('path');
const envPath = path.join(`${__dirname}/../.env`);
dotenv.config({ path: envPath });

let mongoURI;
let secretKey;
let email, password;
switch(process.env.NODE_ENV) {
    case 'local':
        mongoURI = process.env.LOCAL_MONGODB_URI
        secretKey = process.env.LOCAL_SECRET_KEY
        email = process.env.LOCAL_EMAIL
        password = process.env.LOCAL_PASSWORD
        break;
    case 'staging':
        mongoURI = process.env.STAGING_MONGODB_URI
        secretKey = process.env.STAGING_SECRET_KEY
        email = process.env.STAGING_EMAIL
        password = process.env.STAGING_PASSWORD
        break;
}

module.exports = {
    mongoURI, secretKey, email, password
}