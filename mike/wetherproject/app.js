const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'user_details'
});

// route to display the booking history of a specific user
app.get('/booking', (req, res) => {
    const email = req.params.email;
    const query = `
    SELECT *
    FROM booking_history
    WHERE email = ?
  `;
    connection.query(query, [email], (err, results) => {
        if (err) throw err;
        res.render('booking', { bookings: results });
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
