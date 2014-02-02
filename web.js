var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('BX admin app');
});

app.get('/bitrix/admin/mobile/', function(request, response) {
  enterPoint = {
    "status": "success",
    "target": "9ce2d2410a2bba236918b9cd0aaebf51",
    "sessid_md5": "5df8257808c1b46e49250ce5134edc7b",
    "appmap": {
      "main": {
        "url": "main.html"
      },
      "menu": {
        "url": "menu.html"
      }
    }
  }
  response.send(enterPoint);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
