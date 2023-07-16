const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const port = 3000; // Change the port number if needed

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'your_secret_key', resave: true, saveUninitialized: true }));

app.use(express.static('public'));

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Perform login validation logic here
    // For simplicity, we'll assume the login is successful if the email and password are non-empty

    if (email && password) {
        req.session.loggedin = true;
        req.session.email = email;
        res.redirect('/dashboard'); // Redirect to the dashboard page after successful login
    } else {
        res.redirect('/'); // Redirect back to the login page if login fails
    }
});

app.get('/dashboard', (req, res) => {
    if (req.session.loggedin) {
        res.send('Welcome to the dashboard, ' + req.session.email + '!');
    } else {
        res.redirect('/'); // Redirect to the login page if not logged in
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
