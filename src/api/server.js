require('dotenv').config();

const port = process.env.APP_PORT || 3000;
const app = require('./app');

app.listen(port, () => console.log(`Express server listening on port ${port}`));