const sql = require('mssql');
const dotenv = require('dotenv');
dotenv.config({ path: `.env.${process.env.NODE_ENV}`, debug: true });

const config = {
    user: process.env.AZURE_DB_USER,
    password: process.env.AZURE_DB_PWD,
    server: process.env.AZURE_DB_SERVER,
    port: +process.env.AZURE_DB_PORT,
    database: process.env.AZURE_DB_DATABASE,
    authentication: {
        type: process.env.AZURE_DB_AUTH_TYPE
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


