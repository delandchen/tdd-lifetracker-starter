const app = require('./app.js');
require('dotenv').config();

app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on...`);
});