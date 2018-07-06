var express = require('express');
var app = express();

app.get('/api', (req,res) => {
	res.send("Successfully entered API");
	res.end();
});

var port = process.env.PORT || 8080;
app.listen(port, () =>{
	console.log("Listening to port: " + port);
});

