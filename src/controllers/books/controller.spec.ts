import BookController from "./controller"
import { mockRequest, mockResponse } from 'jest-mock-req-res';

const mockGetBookList = jest.fn()
jest.mock('../../repository/book-repository', () => {
    return jest.fn().mockImplementation(() => {
        return {getBookList: mockGetBookList}
    })
})

describe('Books Controller', () => {

    it('should call the correct repository function when calling getBooksController', () => {
        const controller = new BookController();
        const req = mockRequest()
        const res = mockResponse()
        const next = {}
        controller.getBooksController(req, res, next)

        expect(mockGetBookList).toBeCalledTimes(1)
    })

    it('should send json payload to client', () => {
        const controller = new BookController();
        const req = mockRequest()
        const res = mockResponse()
        const next = {}
        controller.getBooksController(req, res, next)

        expect(res.status).toBeCalledWith(200)
        expect(res.send).toBeCalled()
    })
})