require('dotenv').config();
const password = process.env.mysql_password;
module.exports = {
    client: 'mysql2',
    connection: {
        host : '127.0.0.1',
        port : 3306,
        user : 'root',
        password : password,
        database : 'movie_db'
    },
    debug:false
    
};