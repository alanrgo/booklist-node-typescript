import {Request, Response} from 'express';
import BookRepository from '../../repository/book-repository';

export default class BookController {
    
    public getBooksController(req: Request, res: Response, next: any): void {
        res.status(200).send(new BookRepository().getBookList());
    }
}