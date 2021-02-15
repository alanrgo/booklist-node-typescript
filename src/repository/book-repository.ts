import { Pool } from "pg";
import pool from "../database/db";

export class BookRepository { 

    constructor(private poolDB: Pool = pool) {
    }

    public async getBookList(): Promise<any> {
        const rawBooks = await this.poolDB.query("SELECT * FROM books");
        return rawBooks.rows;
    }
}

export default BookRepository;