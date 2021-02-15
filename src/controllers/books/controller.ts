import {Request, Response} from 'express';
import BookRepository from '../../repository/book-repository';

export default class BookController {
    
    public async getBooksController(req: Request, res: Response, next: any): Promise<void> {
        res.status(200).send(await new BookRepository().getBookList());
    }
}