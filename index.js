const { get } = require('axios');
const { version } = require('./package.json');

module.exports = async () => await get('https://api-skiffy.sefinek.fun/api/v1/animals/fox', { headers: { 'User-Agent': `random-fox-img/${version} (https://github.com/sefinek24/random-fox-img)` } });