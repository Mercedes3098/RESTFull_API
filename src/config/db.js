import mysql from "mysql2/promise"

export const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "biblioteca",
    port: 3300,
    waitForConnections: true,
})