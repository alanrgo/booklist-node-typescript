import {Request, Response} from 'express';
import BookRepository from '../../repository/book-repository';

export default class BookController {
    
    public async getBooksController(req: Request, res: Response, next: any): Promise<void> {
        const books = await new BookRepository().getBookList()
        res.header("Content-type", "application/json");
        res.status(200).json(books);
    }

    public async addBookController(req: Request, res: Response, next: any) {
        const { title } = req.body
        const { description } = req.body
        const bookData = { title, description}
        
        const addedBook = await new BookRepository().addBook(bookData)
        res.header("Content-type", "application/json");
        res.status(200).json(addedBook);
    }
}