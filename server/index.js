const express = require('express');
// const cors = require('cors');
let app = express();
const {searchDB, SearchInputModel} = require('../database/index.js')
const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/../client/dist'));
// app.use(cors())


app.get('/Input', function (req, res, next) {

    SearchInputModel.find({"city" : "North Arno"}, function(err, hostels){
        if (err) {
            return err;
        }
        res.send(hostels);
    })



});
let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});