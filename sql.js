const sql = require('mssql');
const config = {
    user: 'ihebdb', // better stored in an app setting such as process.env.DB_USER
    password: 'rootPassword1994', // better stored in an app setting such as process.env.DB_PASSWORD
    server: 'nodejsdatabase.database.windows.net', // better stored in an app setting such as process.env.DB_SERVER
    port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
    database: 'appdb', // better stored in an app setting such as process.env.DB_NAME
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}

console.log("Starting database...");


async function connectAndQuery() {
    try {
        return await sql.connect(config);

        // console.log("Reading products from the Table...");
        // var resultSet = await poolConnection.request().query(`SELECT * FROM products`);
        // console.log(`${resultSet.recordset.length} rows returned.`);

        // output column headers
        // var columns = "";
        // for (var column in resultSet.recordset.columns) {
            // columns += column + ", ";
        // }
        // console.log("%s\t", columns.substring(0, columns.length - 2));

        // ouput row contents from default record set
        // resultSet.recordset.forEach(row => {
            // console.log("%s\t%s", row.productName, row.quantity);
        // });

        // close connection only when we're certain application is finished
        // poolConnection.close();
    } catch (err) {
        console.error(err.message);
    }
}
const connection = connectAndQuery();
// const result = await connection.request().query(`SELECT * FROM products`);
// console.log('result ', result);
module.exports = connection;


