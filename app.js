const express = require('express'),
      app = express();
const posts = require('./models/demopost');

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home', {posts}));

app.get('/home', (req, res) => res.redirect('/'));

app.listen(process.env.PORT, process.env.IP, () => console.log('Server is running...'));