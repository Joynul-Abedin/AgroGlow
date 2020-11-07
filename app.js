const express 		= require('express');
const bodyParser 	= require('body-parser');
const exSession 	= require('express-session');
const cookieParser 	= require('cookie-parser');
const home			= require('./controller/homeController');
const app 			= express();

//config
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({
	secret: 'my secret value',
	saveUninitialized: true, 
	resave: false 
}));
app.use(cookieParser());

app.use('/home', home);

//route
app.get('/', (req, res)=>{
	res.render('views/index', ()=>{
		console.log('index page is running');
	});	
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server starts at ${PORT}`));