import {Request, Response} from 'express';
import BookRepository from '../../repository/books-repository';

export default class BookController {
    
    public getBooksController(req: Request, res: Response, next: any): void {
        return new BookRepository().getBookList();
    }
}