var express = require('express');
var app = express();

var emails = [
		'apuravgupta@merck.com',
		'apurav@gmail.com',
		'apurav',
		'NA',
		'ap@msd.com',
		'',
];

var apps = [
	'bgfbrgbrb',
	'vfsbvdfbb',
	'fsVEBVERB',
	'frgevebvb',
	'vefbvebae',
	'vebvebabf',
	'hrthrrttt',
];

var developers = [
	'bgfbrgbrb',
	'vfsbvdfbb',
	'fsVEBVERB',
	'frgevebvb',
	'vefbvebae',
	'vebvebabf',
	'hrthrrttt',
];

app.get('/api/apps', (req,res) => {
	
	res.send(apps);
	res.end();
});

app.get('/api/developers', (req,res) => {
	
	res.send(developers);
	res.end();
});

app.get('/api/emails', (req,res) => {
	
	res.send(emails);
	res.end();
});

var port = process.env.PORT || 8080;
app.listen(port, () =>{
	console.log("Listening to port: " + port);
});

