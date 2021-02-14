import {Request, Response} from 'express';

export default class HealthController {
    
    public healthCheck(req: Request, res: Response, next: any): void {
        res.sendStatus(200);
    }
}