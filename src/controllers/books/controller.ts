import {Request, Response} from 'express';
import { Book } from '../../models/Book';
import BookRepository from '../../repository/book-repository';
import { BookParams } from './interfaces/book-params';

export default class BookController {
    
    public async getBooksController(req: Request, res: Response, next: any): Promise<void> {
        try {
            const books = await new BookRepository().getBookList();
            res.header("Content-type", "application/json");
            res.status(200).json(books);
        } catch (err) {
            console.error(err);
            res.status(500);
        }
    }

    public async addBookController(req: Request, res: Response, next: any) {
        try {
            const { title } = req.body;
            const { description } = req.body;
            const bookData: BookParams = { title, description };
            
            const addedBook = await new BookRepository().addBook(bookData);
            res.header("Content-type", "application/json");
            res.status(200).json(addedBook);
        } catch (err) {
            console.error(err);
            res.status(500);
        }
    }

    public async updateBookController(req: Request, res: Response, next: any): Promise<void> {
        try {
            const { title } = req.body;
            const { description } = req.body;
            const { id } = req.body;
    
            const book: Book = {title, description, id}
            await new BookRepository().updateBook(book);
            res.header("Content-type", "application/json");
            res.status(200).json({});
        } catch(err) {
            console.error(err);
            res.status(500);
        }
    }

    public async deleteBookController(req: Request, res: Response, next: any): Promise<void> {
        try {
            const { id } = req.body;

            await new BookRepository().deleteBook(id);
            res.header("Content-type", "application/json");
            res.status(200).json({});
        } catch(err) {
            console.error(err);
            res.status(500);
        }
    }
    
}