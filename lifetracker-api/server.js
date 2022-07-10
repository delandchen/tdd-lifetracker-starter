const app = require('./app.js');
const { PORT } = require('./config');

app.listen(process.env.PORT || 3001, () => {
    console.log(`Listening on...`);
});