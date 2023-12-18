import { NextFunction, Request, Response } from "express";
//la parte del medio de respuestas
const logMiddleware = (req:Request, res:Response, next : NextFunction) => {
    const header = req.headers;
    const userAgent = header["user-agent"];
    next();
};

export { logMiddleware };