const express = require('express');

// Port

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.static("public"));
app.get('/call', (req, res) => {
  var request = require("request");

  var options = {
    method: 'GET',
    url: 'https://www.nordstromrack.com/api/search2/catalog/search',
    headers: {
      'Cache-Control': 'no-cache'
    }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    res.send(response);
  });

});


app.listen(PORT, () => {
  console.log("listening on", PORT);
});