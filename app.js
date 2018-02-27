const express = require('express'),
      app = express();
const posts = require('./models/demopost');

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home', {posts}));

app.get('/home', (req, res) => res.redirect('/'));

app.get('/about', (req, res) => res.render('about'));

app.get('/contact', (req, res) => res.render('contact'));

app.post('/contact', (req, res) => console.log(req.body));

app.get('/blog', (req, res) => res.render('blog', {posts}));

app.listen(process.env.PORT, process.env.IP, () => console.log('Server is running...'));
// app.listen(3000, () => console.log('Server is running...'));
