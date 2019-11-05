const fs = require('fs');
const { config } = require('dotenv');

config();

fs.writeFileSync('./.env', `KEY=${process.env.KEY}\n`);
