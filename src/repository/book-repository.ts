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

    public async updateBook(bookParams: Book): Promise<void> {
        const query = {
            text: "UPDATE books SET title = $1, description $2 WHERE id = $3",
            values: [bookParams.title, bookParams.description, bookParams.id]
        }
        await this.poolDB.query(query);
    }

    public async deleteBook(bookId: number): Promise<void> {
        const query = {
            text: "DELETE FROM books WHERE id = $1",
            values: [bookId]
        }
        await this.poolDB.query(query);
    }
}

export default BookRepository;