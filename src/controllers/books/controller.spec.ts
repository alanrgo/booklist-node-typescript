import BookController from "./controller"
import { mockRequest, mockResponse } from 'jest-mock-req-res';
import { Book } from "../../models/Book";

const mockGetBookList = jest.fn()
const mockAddBook = jest.fn()
const mockUpdateBook = jest.fn()
const mockDeleteBook = jest.fn()
jest.mock('../../repository/book-repository', () => {
    return jest.fn().mockImplementation(() => {
        return {
            getBookList: mockGetBookList,
            addBook: mockAddBook,
            updateBook: mockUpdateBook,
            deleteBook: mockDeleteBook
        }
    })
})

describe('Books Controller', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getBooksController', () => {

        it('should call the correct repository function when calling getBooksController', () => {
            const controller = new BookController();
            const req = mockRequest()
            const res = mockResponse()
            const next = {}
            controller.getBooksController(req, res, next)
    
            expect(mockGetBookList).toBeCalledTimes(1)
        })
    
        it('should send json payload to client', async () => {
            const controller = new BookController();
            const req = mockRequest()
            const res = mockResponse()
            const next = {}
            await controller.getBooksController(req, res, next)
    
            expect(res.status).toBeCalledWith(200)
            expect(res.json).toBeCalled()
        })
    })

    
    describe('addBookController', () => {
        it('should send json payload to client when calling addBookController', async () => {
            const controller = new BookController();
            const bookData = {
                title: "title",
                description: "description"
            }
            const req = mockRequest({ body: bookData })
            const res = mockResponse()
            const next = {}
    
            const expected = {...bookData, id: 3}
            mockAddBook.mockResolvedValue(expected)
    
            await controller.addBookController(req, res, next)
    
            expect(res.status).toBeCalledWith(200)
            expect(res.json).toBeCalledWith(expected)
        })
    
        it('should call the correct repository function when calling addBookController', () => {
            const controller = new BookController();
            const req = mockRequest()
            const res = mockResponse()
            const next = {}
            controller.addBookController(req, res, next)
    
            expect(mockAddBook).toBeCalledTimes(1)
        })
    
        it('should call the repository function with the book data sent on request', () => {
            const controller = new BookController();
            const bookData = {
                title: "title",
                description: "description"
            }
            const req = mockRequest({ body: bookData })
            const res = mockResponse()
            const next = {}
            controller.addBookController(req, res, next)
    
            expect(mockAddBook).toBeCalledWith(bookData)
        })
    })

    describe('updateBookController', () => {

        it('should call the correct repository function when calling updateBookController', () => {
            const controller = new BookController();
            const bookData = {
                title: "title",
                description: "description",
                id: 1
            }
            const req = mockRequest({body: bookData})
            const res = mockResponse()
            const next = {}
            controller.updateBookController(req, res, next)
    
            expect(mockUpdateBook).toBeCalledTimes(1)
            expect(mockUpdateBook).toBeCalledWith(bookData as Book)
        })
    
        it('should send json payload to client', async () => {
            const controller = new BookController();
            const req = mockRequest()
            const res = mockResponse()
            const next = {}
            await controller.updateBookController(req, res, next)
    
            expect(res.sendStatus).toBeCalledWith(200)
        })
    })

    describe('deleteBookController', () => {

        it('should call the correct repository function when calling updateBookController', () => {
            const controller = new BookController();
            const bookId = 1
            const req = mockRequest({body: {id: bookId}})
            const res = mockResponse()
            const next = {}
            controller.deleteBookController(req, res, next)
    
            expect(mockDeleteBook).toBeCalledTimes(1)
            expect(mockDeleteBook).toBeCalledWith(bookId)
        })
    
        it('should send json payload to client', async () => {
            const controller = new BookController();
            const req = mockRequest()
            const res = mockResponse()
            const next = {}
            await controller.deleteBookController(req, res, next)
    
            expect(res.sendStatus).toBeCalledWith(200)
        })
    })
})