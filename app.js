const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

require('./utils/db');
const Contact = require('./model/contact');

const app = express();
const port = 3000;

// set up ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded( {extended: true}));

// konfigurasi flash
app.use(cookieParser('secret'));
app.use(
	session({
		cookie: { maxAge: 6000 },
		secret: 'secret',
		resave: true,
		saveUninitialized: true,
	})
);
app.use(flash());


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
app.get('/contact', async (req, res) => {
	// contact.find().then((contact) => {
	// 	res.send(contact);
	// });

	const contacts = await contact.find();
	
	res.render('contact', { 
		layout: 'layouts/main-layout',
		title: 'Halaman Contactt',
		contacts,
		msg: req.flash('msg'),
	});
});

// halaman detail contact
app.get('/contact/:nama', async (req, res) => {
	const contact = await Contact.findOne({ nama : req.params.nama });

	res.render('detail', {
		title: 'Halaman Detail Contact',
		layout: 'layouts/main-layout',
		contact,
	});
});

app.listen(port, () => {
    console.log('mongo Contact App | listening at http://localhost:${port}');    
});