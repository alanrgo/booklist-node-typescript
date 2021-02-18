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
        return {id: -1, ...bookData};
    } 
}

export default BookRepository;