import { Pool } from "pg";
import pool from "../database/db";

export class BookRepository { 

    constructor(private poolDB: Pool = pool) {
    }

    public getBookList(): any {
        const rawBooks = this.poolDB.query("SELECT * FROM books");
        return rawBooks;
    }
}

export default BookRepository;