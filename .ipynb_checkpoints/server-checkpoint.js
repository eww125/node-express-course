const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/static', express.static('files'))

const mockUserData=[
	{name:'Mark'},
	{name:'Jill'}
]

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/table.html'));
});

app.get('/sendfile', function(req, res) {
  res.sendFile(path.join(__dirname, '/sendfile.html'));
});

app.get('/arcgis', function(req, res) {
  res.sendFile(path.join(__dirname, '/arcgis.html'));
});

app.get('/arcgis2', function(req, res) {
  res.sendFile(path.join(__dirname, '/arcgis2.html'));
});

app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})

app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

app.post('/login',function(req,res){
 	const username=req.body.username;
 	const password=req.body.password;
 
 	const mockUsername="billyTheKid";
 	const mockPassword="superSecret";
 
 	if (username===mockUsername && password===mockPassword){
      	res.json({
      	 	success: true,
      	 	message: 'password and username match!',
      	 	token: 'encrypted token goes here'
      	})
 	} else {
      	res.json({
      	 	success: false,
      	 	message: 'password and username do not match'
      	})
 	}
})


app.listen(8080,function(){console.log('server is listening')})
