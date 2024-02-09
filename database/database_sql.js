const mysql = require('mysql');
class Database_sql {
    constructor(host, user, pass) {
        this.host = host;
        this.user = user;
        this.password = pass;
        this.connection = null;
    }
    connect() {
        let connection = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password
        });
        connection.connect(function(err) {
            if (err) throw err;
            console.log("Connected.");
        })
        this.connection = connection;
    }

    disconnect() {
        this.connection.disconnect();
        this.connection = null;
    }

    query() {

    }

    createTable() {}

}