var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'webclass2db'
});

conn.connect(function(err){
    if (err) throw err;
    console.log('Database Connected');
});

module.exports = conn;