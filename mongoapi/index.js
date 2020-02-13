const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//*DATABASE CONNECTION
var db = mongoose.createConnection('mongodb://localhost:27017/login_with_react-native', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

if (!db) {
    console.log("False");
}
else {
    console.log("True");
}

//*SAMPLE REQUEST
app.get('/retrieve', (req, res) => {
    db.collection("Login").find({}).toArray(
        (err, result) => {
            if (err) throw err;
            res.send(result)
        }
    )
})

//*LOGIN
app.post('/login', function (req, res) {
    var username1 = req.body.Username;
    var password1 = req.body.Password;
    db.collection("Login").find({
        username: username1,
        password: password1
    }).toArray(function (err, result) {
        if (err) {
            res.send("Credentials are Wrong");
        }
        else if (result.length == 0) {
            res.send("Enter Credentials");
        }
        else {
            console.log('login successful')
            res.send(result[0].username + " " + result[0].password + " have successfully logged in");
        }
    })
});


//*REGISTER
app.post('/register', (req, res) => {
    var obj = req.body;
    db.collection("Login").insertOne({
        username: obj.Username,
        password: obj.Password
    }, (err) => {
        if (err) throw err;
        res.send(console.log('register successful'))
    })
})

//*PORT CONNECTION
app.listen(3000)
