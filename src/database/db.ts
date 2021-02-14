import { Pool } from 'pg';

const pool = new Pool({
    user: "",
    password: "",
    database: "alan.gomes",
    host: "localhost",
    port: 5432
})

export default pool;