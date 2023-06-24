import * as express from 'express';

declare global {
    namespace Express {
        interface Request {
            body: {
                user: {
                    id: string,
                    name: string,
                    job: string,
                    isAdmin: boolean,
                }
            }
        }
    }
}
// Code supplied by https://stackoverflow.com/questions/37377731/extend-express-request-object-using-typescript
// Suggested by links bellow and GitHub Copilot
