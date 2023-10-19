const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Inititalize the app and add middleware
app.set('view engine', 'pug'); // Setup the pug
app.use(bodyParser.urlencoded({extended: true})); // Setup the body parser to handle form submits
app.use(session({secret: 'super-secret'})); // Session setup

/** Handle login display and form submit */
app.get('/login', (req, res) => {
  if (req.session.isLoggedIn === true) {
    return res.redirect('/');
  }
  res.render('login', {error: false});
});

app.post('/login', (req, res) => {
  const fs = require('fs');

// Specify the path to the SQL file
const sqlFilePath = 'C:\Users\Pet\nodejs-open-redirect\database.sql';

// Read the SQL file
fs.readFile(sqlFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the SQL file: ${err}`);
    return;
  }

  // The content of the SQL file is in the 'data' variable
  console.log('SQL File Contents:');
  console.log(data);

  // You can now process or manipulate the SQL content as needed
});
});

/** Handle logout function */
app.get('/logout', (req, res) => {
  req.session.isLoggedIn = false;
  res.redirect('/');
});

/** Simulated bank functionality */
app.get('/', (req, res) => {
  res.render('index', {isLoggedIn: req.session.isLoggedIn});
});

app.get('/balance', (req, res) => {
  if (req.session.isLoggedIn === true) {
    res.send('Your account balance is $1234.52');
  } else {
    res.redirect('/login?redirect_url=https://www.stackhawk.com/');
  }
});

app.get('/account', (req, res) => {
  if (req.session.isLoggedIn === true) {
    res.send('Your account number is ACL9D42294');
  } else {
    res.redirect('/login?redirect_url=/account');
  }
});

app.get('/email', (req, res) => {
  if (req.session.isLoggedIn === true) {
    res.send('Your email address is test@test.com');
  } else {
    res.redirect('/login?redirect_url=/email');
  }
});

app.get('/contact', (req, res) => {
  res.send('Our address : 321 Main Street, Beverly Hills.');
});

/** App listening on port */
app.listen(port, () => {
  console.log(`MyBank app listening at http://localhost:${port}`);
});