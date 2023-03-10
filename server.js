const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'dba',
    password: '123456',
    database: 'restaurantcs340',
    port: 4000,
  });
  
  
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/employee.html');
});

app.get('/employees', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {  
            console.error('Error getting connection from db', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        const sql = 'SELECT employeeID, firstName, lastName, phone, email, address, role, pay FROM employees';
        connection.query(sql, (err, results) => {
            connection.release();
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }
        res.json(results);
        });
    });
});


app.post('/add-employee', (req, res) => {
  const { firstName, lastName, phone, email, address, role, pay } = req.body;
  pool.getConnection((err, connection) => {
    if (err) {  
      console.error('Error getting connection from db', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    const sql = 'INSERT INTO employees (firstName, lastName, phone, email, address, role, pay) VALUES (?, ?, ?, ?, ?, ?, ?)';
    connection.query(sql, [firstName, lastName, phone, email, address, role, pay], (err, results) => {
      connection.release();
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.redirect('/');
    });
  });
});

app.delete('/employees/:employeeID', (req, res) => {
  const employeeID = req.params.employeeID;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting connection from db', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    const sql = 'DELETE FROM employees WHERE employeeID = ?';
    connection.query(sql, [employeeID], (err, results) => {
      connection.release();
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.sendStatus(204);
    });
  });
});

const port = 5205;
app.listen(port, () => {
  console.log('Server listening on port 3000');
});
