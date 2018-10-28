const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Working")
});

app.listen(1337 || process.env.PORT, () => {
    console.log('app is running on port 3000');
});



