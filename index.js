const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');



app.use(cors());
app.use(bodyParser.json());

//home page
app.get('/', (req, res) => {
    //get all events
    res.send("Working")
});



app.listen(3000 || process.env.PORT, () => {
    console.log('app is running on port 3000');
});



