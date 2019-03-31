const express = require('express');
// const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const { searchDB, SearchInputModel } = require('../database/index.js');
// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/../client/dist'));
// app.use(cors())


app.get('/Input', (req, res) => {
  SearchInputModel.find({ city: 'North Arno' }, (err, hostels) => {
    if (err) {
      return err;
    }
    res.send(hostels);
  });
});
const port = 1128;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
