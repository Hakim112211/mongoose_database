const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;

// set up ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded( {extended: true}));


// halaman home
app.get('/', (req, res) => {
	const mahasiswa = [
		{
			nama: 'Laurientus Rando',
			email: 'rando@gmail.com',
		},
		{
			nama: 'Kevin Budiman',
			email: 'kevin@gmail.com',
		},
		{
			nama: 'Rangga Sastria',
			email: 'rangga@gmail.com',
		},
	];
	res.render('index', { 
		nama: 'Laurientus Rando', 
		title: 'Halaman Home',
		mahasiswa,
		layout: 'layouts/main-layout',
	});
});

// halaman about
app.get('/about', (req, res) => {
	res.render('about', { 
		layout: 'layouts/main-layout',
		title: 'Halaman About',
	});
});

// halaman contact
app.get('/contact', (req, res) => {
	const contacts = loadContact();
	
	res.render('contact', { 
		layout: 'layouts/main-layout',
		title: 'Halaman Contactt',
		contacts,
		msg: req.flash('msg'),
	});
});

app.listen(port, () => {
    console.log('mongo Contact App | listening at http://localhost:${port}');    
});