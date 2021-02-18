import { Pool } from "pg";
import { BookParams } from "../controllers/books/interfaces/book-params";
import pool from "../database/db";
import { Book } from "../models/Book";

export class BookRepository {
    constructor(private poolDB: Pool = pool) {
    }

    public async getBookList(): Promise<Book[]> {
        const rawBooks = await this.poolDB.query("SELECT * FROM books");
        return rawBooks.rows;
    }

    public async addBook(bookData: BookParams): Promise<Book> {
        const query = {
            text: "INSERT INTO books(title, description) VALUES($1, $2) RETURNING id", 
            values: [bookData.title, bookData.description]
        }
        const result = await this.poolDB.query(query);
        return {...bookData, id: result.rows[0].id}
    } 
}

export default BookRepository;