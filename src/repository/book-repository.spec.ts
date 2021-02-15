import BookRepository from "./book-repository";
import pool from "../database/db";

jest.mock('../database/db', () => {
    return {
        query: jest.fn()
    }
});

describe('Book Repository', () => {

    beforeEach(() => {

    })

    it('should call data base with the correct query to get the book list', () =>  {
        let bookRepository = new BookRepository()
        let sql = 'SELECT * FROM books'

        bookRepository.getBookList();
        expect(pool.query).toBeCalledTimes(1);
        expect(pool.query).toBeCalledWith(sql);
    })
})