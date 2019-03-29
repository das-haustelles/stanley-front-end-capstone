const express = require('express');
// const cors = require('cors');
let app = express();
const {searchDB} = require('../database/index.js')
const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/../client/dist'));
// app.use(cors())


app.get('/Input', function (req, res, next) {
    console.log('server get req.body = ', req.body)
    res.send(bodyParser(req.body))
});
let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});