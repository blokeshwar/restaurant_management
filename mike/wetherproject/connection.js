const express = require ("express");
const  bodyParser = require("body-parser");
const  request =require("request");
const mysql = require("mysql");
const ejs = require("ejs");
const e = require("express");
const session = require('express-session');

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
let userEmail;
let user;


app.use(bodyParser.urlencoded({extended: true}));


app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const connection = mysql.createConnection({
   host: 'aws.connect.psdb.cloud',
   user: 'gxog12v7e7mcr28u9vnr',
   password: 'pscale_pw_igTPjXLmeFQy7rRE2knv1WQ5msMjytxGutyfinHf5uN',
   database: 'user_details'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err);
        return;
    }
    console.log('Connected to database!');
});




app.get("/",function (req,res){

    res.render('bootstrap');

});



app.get("/kolkata",function (req,res){

    res.render('kolkata');

});
app.get("/kolkata1",function (req,res){

    res.render('kolkata1');

});


app.get("/book.html",function (req,res){

    res.render('book')

});

app.get("/Delhi",function (req,res){

    res.render('delhi')

});
app.get("/Delhi1",function (req,res){

    res.render('delhi1')

});

app.get("/Dining",function (req,res){

    res.render('dine')

});
app.get("/Dining1",function (req,res){

    res.render('dine1')

});

app.get("/cochin",function (req,res){

    res.render('cochin')

});
app.get("/cochin1",function (req,res){

    res.render('cochin1')

});
app.get("/Goa",function (req,res){

    res.render('goa')

});
app.get("/Goa1",function (req,res){

    res.render('goa1')

});
app.get("/mumbai",function (req,res){

    res.render('mumbai')

});
app.get("/mumbai1",function (req,res){

    res.render('mumbai1')

});
app.get("/maldives",function (req,res){

    res.render('maldives')

});
app.get("/maldives1",function (req,res){

    res.render('maldives1')

});
app.get("/bootstrap",function (req,res){

    res.redirect('/')

});
app.post("/bootstrap.ejs",function (req,res){

    res.redirect('/')

});

app.get("/booking", (req, res) => {
    res.redirect('booking');
});

app.get('/BookAstay' ,function (req,res){
    res.render('signin');
})

app.get('/meetings' ,function (req,res){
    res.render('meeting');
})
app.get('/meetings1' ,function (req,res){
    res.render('meeting_1');
})
app.get('/bookmeet.html' ,function (req,res){
    res.render('bookmeet');
})
app.get('/Wedding' ,function (req,res){
    res.render('wedding_wed');
})
app.get('/Wedding1' ,function (req,res){
    res.render('wedding_wed1');
})
app.get('/mumbai_wed' ,function (req,res){
    res.render('mumbai_wed');
})

app.get('/delhi_wed' ,function (req,res){
    res.render('delhi_wed');
})

app.get('/goa_wed' ,function (req,res){
    res.render('goa_wed');
})
app.get('/cochin_wed' ,function (req,res){
    res.render('cochin_wed');
})
app.get('/kolkata_wed' ,function (req,res){
    res.render('kolkata_wed');
})
app.get('/maldives_wed' ,function (req,res){
    res.render('maldives_wed');
})
app.get('/mumbai_wed1' ,function (req,res){
    res.render('mumbai_wed1');
})

app.get('/delhi_wed1' ,function (req,res){
    res.render('delhiwed1');
})

app.get('/goa_wed1' ,function (req,res){
    res.render('goa_wed1');
})
app.get('/cochin_wed1' ,function (req,res){
    res.render('cochin_wed1');
})
app.get('/kolkata_wed1' ,function (req,res){
    res.render('kolkata_wed1');
})
app.get('/maldives_wed1' ,function (req,res){
    res.render('maldives_wed1');
})

app.get('/Wedding' ,function (req,res){
    res.render('wedding_wed');
})
app.get("/wedding.egs",function (req,res){

    res.redirect('wedding_wed')

});
app.get("/wedding.egs1",function (req,res){

    res.redirect('wedding_wed1')

});


app.get('/signup', (req, res) => {
    res.render('signup');
});
app.get('/signin', (req, res) => {
    res.render('signin');
});

app.get('/book_wed', (req, res) => {
    res.render('bookwed');
});
app.get('/bookwed.html', (req, res) => {
    res.render('bookwed');
});


app.post('/signup', (req, res) => {

    const { name, email, password } = req.body;

    const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    connection.query(query, [name, email, password], (err, result) => {
        if (err && err.errno === 1062) {
            console.log('Error: Duplicate entry found');
            res.render('signup1', { message: 'Username Already exist' });
            // Handle the error here
        }
        else if (err) {
            console.log(err);
            // Handle other errors here
        } else {
            console.log('User inserted into database!');
            res.redirect('/');
        }

    })
});
app.post('/booking', (req, res) => {

    const {fname,date_in,date_out,Rooms,email,mobile,location} = req.body;

    const query = `INSERT INTO users1 (fname,date_in,date_out,Rooms,email,mobile,location) VALUES (?,?,?,?,?,?,?)`;
    connection.query(query, [fname,date_in,date_out,Rooms,email,mobile,location], (err, result) => {
        if (err) {
            console.error('Error inserting into database: ', err);
            res.render('index', { message: 'Username Already exist' });
            // Handle the error here
            return;
        } else {
            console.log('User inserted into database!');
            res.redirect('/');
        }

    })
});

app.get("/logout",function (req,res){

    res.redirect('/')

});



app.get("/",function (req,res){

    res.render('test')

});



app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    console.log(`Received login request for email: ${email} and password: ${password}`);
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    connection.query(query, [email, password], (err, results) => {
        if (err) {
            console.error('Error selecting user from database: ', err);
            return;
        }
        if (results.length === 0) {
            console.log('Rendering signin view with "Invalid email or password" message');
            res.render('next', { message: 'Invalid email or password' });
        } else {
            const user = results[0];
            console.log(`Rendering next view with "Welcome back, ${user.name}" message`);
            res.render('bootstrap1', { message: `Hi, ${user.name}` });
        }
    });
});

app.get("/bootstrap1",function (req,res){

    res.render('bootstrap1', { message: `Hi user, ` });


});
app.get("/book_his",function (req,res){

    res.render('signin_history')

});

app.post('/history', (req, res) => {
    // Get the user's email address from the form data
    const { email, password } = req.body;
    console.log(`Received login request for email: ${email} and password: ${password}`);
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    connection.query(query, [email, password], (err, results) => {
        if (err) {
            console.error('Error selecting user from database: ', err);
            return;
        }
        if (results.length === 0) {
            console.log('Rendering signin view with "Invalid email or password" message');
            res.render('signin_history1', { message: 'Invalid email or password' });
        } else {
            const user = results[0];
            console.log(`Rendering next view with "the request for history from, ${user.name}" message`);
            userEmail = req.body.email;
            // Redirect to the booking history page for this user
            res.redirect('/booking-history');
        }
    });
});

/*
// Define a route for the booking history page
app.get('/booking-history', (req, res) => {
    // Get the booking history for this user from the database
    const sql = `SELECT * FROM booking_history WHERE email = '${userEmail}'`;
    connection.query(sql, (err, results) => {
        if (err) throw err;

        // Render the booking history page with the user's email and booking history
        res.render('booking', { userEmail, bookings: results });
    });
});*/
/*
app.get('/booking-history', (req, res) => {
    // Get the user's email from the session

    // Query the database to get the booking history for this user
    const sql = `
    SELECT users.email, users1.fname AS fname1, users1.date_in, users1.date_out, users1.Rooms, users1.location AS location1, users1.mobile AS mobile1, NULL AS fname2, NULL AS start_time, NULL AS end_time, NULL AS persons, NULL AS location2, NULL AS mobile2
    FROM users
    JOIN users1 ON users.email = users1.email
    WHERE users.email = '${userEmail}'
    UNION
    SELECT users.email, NULL AS fname1, NULL AS date_in, NULL AS date_out, NULL AS Rooms, NULL AS location1, NULL AS mobile1, meeting_history.fname, meeting_history.start_time, meeting_history.end_time, meeting_history.person, meeting_history.location AS location2, meeting_history.mobile AS mobile2
    FROM users
    JOIN meeting_history ON users.email = meeting_history.email
    WHERE users.email = '${userEmail}'
    UNION
    SELECT users.email, NULL AS fname1, NULL AS date_in, NULL AS date_out, NULL AS Rooms, NULL AS location1, NULL AS mobile1, wedding.fname, wedding.start_date, wedding.end_date, wedding.persons, wedding.location AS location2, wedding.mobile AS mobile2
    FROM users
    JOIN wedding ON users.email = wedding.email
    WHERE users.email = '${userEmail}'`;

    connection.query(sql, (err, results) => {
        if (err) throw err;

        // Render the booking history page with the user's email and booking history
        res.render('booking', { userEmail, bookings: results });
    });
});*/




// Define a route for the booking history page
app.get('/booking-history', (req, res) => {
    // Get the user's email from the session


    // Query the database to get the booking history for this user
    const sqlUsers1 = `SELECT *, 'User1' as type FROM users1 WHERE email = '${userEmail}'`;
    const sqlMeetingHistory = `SELECT *, 'Meeting' as type FROM meeting_history WHERE email = '${userEmail}'`;
    const sqlWedding = `SELECT *, 'Wedding' as type FROM wedding WHERE email = '${userEmail}'`;



    connection.query(sqlUsers1, (err, users1Results) => {
        if (err) throw err;

        connection.query(sqlMeetingHistory, (err, meetingHistoryResults) => {
            if (err) throw err;

            connection.query(sqlWedding, (err, weddingResults) => {
                if (err) throw err;

                // Render the booking history page with the user's email and booking history
                res.render('booking', {
                    userEmail,
                    user1Bookings: users1Results,
                    meetingBookings: meetingHistoryResults,
                    weddingBookings: weddingResults,
                });
            });
        });
    });
});



app.get('/booking_update', (req, res) => {
    const query = `
SELECT u.email, u1.Rooms, u1.date_in, u1.date_out, mh.name, mh.date, mh.start_time, mh.end_time, mh.person, mh.mobile, mh.location
FROM users u
JOIN users1 u1 ON u.email = u1.email
JOIN meeting_history mh ON u.email = mh.email;`;

    connection.query(query, (err, result) => {
        if (err) throw err;
        console.log('Inserted ' + result.affectedRows + ' rows into booking_history table.');
        res.send('/booking-history')
    });

    connection.end((err) => {
        if (err) throw err;
        console.log('Disconnected from the MySQL database!');
    });
});

app.get('/admin-login', function(req, res) {
    res.render('admin-login.ejs', { error: '' });
});

app.post('/admin-login', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (username === 'admin' && password === 'password') {
        req.session.admin = true;
        res.redirect('/admin-booking-history');
    } else {
        res.render('admin-login.ejs', { error: 'Invalid username or password' });
    }
});

app.get('/admin-booking-history', function(req, res) {
    if (req.session.admin) {
        const sql = 'SELECT * FROM bookings';
        connection.query(sql, function(err, results) {
            if (err) throw err;
            res.render('admin-booking-history.ejs', { bookings: results });
        });
    } else {
        res.redirect('/admin-login');
    }
});

app.post('/b_meeting', (req, res) => {

    const {fname,date,start_time,end_time,person,email,mobile,location} = req.body;

    const query = `INSERT INTO meeting_history(fname,date,start_time,end_time,person,email,mobile,location) VALUES (?,?,?,?,?,?,?,?)`;
    connection.query(query, [fname,date,start_time,end_time,person,email,mobile,location], (err, result) => {
        if (err) {
            console.error('Error inserting into database: ', err);
            res.render('index', { message: 'Username Already exist' });
            // Handle the error here
            return;
        } else {
            console.log('User inserted into database!');
            res.redirect('/');
        }

    })
});



app.post('/b_wedding', (req, res) => {

    const {fname,start_date,end_date,persons,email,mobile,location} = req.body;

    const query = `INSERT INTO wedding (fname,start_date,end_date,persons,email,mobile,location) VALUES (?,?,?,?,?,?,?)`;
    connection.query(query, [fname,start_date,end_date,persons,email,mobile,location], (err, result) => {
        if (err) {
            console.error('Error inserting into database: ', err);
            res.render('index', { message: 'Username Already exist' });
            // Handle the error here
            return;
        } else {
            console.log('User inserted into database!');
            res.redirect('/');
        }

    })
});




app.listen (3000,function (){
    console.log("the server is running in server 3000");
});
