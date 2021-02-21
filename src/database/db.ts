import { Pool } from 'pg';

const pool = new Pool({
    user: "postgres",
    password: "",
    database: "book_db",
    host: "localhost",
    port: 5432
})

export default pool;