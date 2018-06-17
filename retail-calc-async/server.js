const express = require('express');
const app = express();
const config = require('./config');

app.get('/discounts/', (req, res) => {
    const discounts = [
        [1000, 0.03],
        [5000, 0.05],
        [7000, 0.07],
        [10000, 0.1],
        [50000, 0.15]
    ];
    res.json(discounts);
});

app.listen(config.serverPort, () => console.log(`Server is listening on port ${config.serverPort}!`));
