const express = require('express');
const router = require('./routes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/api/v1', router);

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.listen(PORT, () => {console.log('app is running.')})