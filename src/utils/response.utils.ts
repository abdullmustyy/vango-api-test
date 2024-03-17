import { Response } from "express";

class ResponseHandler {
  static success(res: Response, data: any, statusCode = 200, message?: string) {
    const responseObject: Record<string, any> = {
      success: true,
      status: statusCode,
      data: data,
      timestamp: new Date().toISOString(),
    };

    if (message) {
      responseObject.message = message;
    }

    res.status(statusCode).json(responseObject);
  }
}

export { ResponseHandler };
