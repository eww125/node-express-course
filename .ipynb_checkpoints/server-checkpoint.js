const express = require('express');
const app = express();

const mockUserData=[
	{name:'Mark'},
	{name:'Jill'}
]

app.get('/', function (req, res) {
	res.json({
		success: true,
		message: 'this would be the default route',
		users: mockUserData
	})
});


app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})

app.listen(8080,function(){console.log('server is listening')})
