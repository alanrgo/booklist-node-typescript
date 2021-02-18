import BookRepository from "./book-repository";
import pool from "../database/db";
import { BookParams } from "../controllers/books/interfaces/book-params";

jest.mock('../database/db', () => {
    return {
        query: jest.fn()
    }
});

describe('Book Repository', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    it('should call data base with the correct query to get the book list', () =>  {
        let bookRepository = new BookRepository()
        let sql = 'SELECT * FROM books'

        bookRepository.getBookList();
        expect(pool.query).toBeCalledTimes(1);
        expect(pool.query).toBeCalledWith(sql);
    })

    it('should call data base with the correct query to insert a book in db', async () =>  {
        let bookRepository = new BookRepository()
        let bookParams: BookParams = {
            title: "title",
            description: "description"
        }
        let query = {
            text: "INSERT INTO books(title, description) VALUES($1, $2) RETURNING id",
            values: [bookParams.title, bookParams.description]
        }

        const anyNumber = 3;
        const expectedQueryResponse = [{id: anyNumber}]

        const queryMethod = jest.spyOn(pool, 'query').mockImplementation(() => {
            return { rows: expectedQueryResponse}
        });

        const expected = {...bookParams, id: anyNumber};
        const actual = await bookRepository.addBook(bookParams);
        expect(queryMethod).toBeCalledTimes(1);
        expect(queryMethod).toBeCalledWith(query);
        expect(actual).toEqual(expected);
    })
})