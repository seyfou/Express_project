const express = require('express');
const app = express();
const port = 4000;

app.use(express.static(__dirname + "/components"))

app.listen(port, function() {
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s', 
        port);
  });
  // Middleware Verify Time
const verifTime = (req, res, next) => {
    let time = new Date();
    if (
      time.getDay() <= 6 &&
      time.getDay() >= 1 &&
      time.getHours() <= 17 &&
      time.getHours() >= 9
    )  {  
           res.sendFile('C:/Users/ADMIN/myapp/components/home.html')     } 
      else res.sendFile("C:/Users/ADMIN/myapp/components/closed.html"), { time: time.toUTCString() }        };
      
      app.use(verifTime);  
