
var express = require('express');
var app = express();
const basicAuth = require('express-basic-auth');

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

//This is a middleware which executes before execution of code and is checking if user and pass is valid.
//User name and password are sent as basic auth
app.use(basicAuth({
    users: { 'admin': 'supersecret' }
}))

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

var port = process.env.PORT || 3000;
app.listen(port, () =>{
	console.log("Listening to port: " + port);
});

