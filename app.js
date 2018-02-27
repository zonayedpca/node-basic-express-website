const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      posts = require('./models/demopost');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home', {posts}));

app.get('/home', (req, res) => res.redirect('/'));

app.get('/about', (req, res) => res.render('about'));

app.get('/contact', (req, res) => res.render('contact'));

app.post('/contact/contactinfo', (req, res) => {
  const contact = req.body.contact;
  res.render('contact_info', {contact});
});

app.post('/contact', (req, res) => console.log(req.body));

app.get('/blog', (req, res) => res.render('blog', {posts}));

app.post('/blog', (req, res) => {
    posts.push(req.body.blog);
    res.redirect('/blog');
});

app.get('/blog/new', (req, res) => res.render('addnew', {}));

app.listen(process.env.PORT, process.env.IP, () => console.log('Server is running...'));
