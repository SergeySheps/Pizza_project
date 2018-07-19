const express = require("express");
const router = require("./user/userControllers");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', router);

const server = app.listen(4000, function () {
    console.log('Server listening on port ' + 4000);
});
