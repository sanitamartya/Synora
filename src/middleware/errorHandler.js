import { errorResponse } from "../shared/apiResponse.js";
import AppError from "../errors/AppError.js";

export function errorHandler(error, req, res, next) {
  if (error instanceof AppError) {
    return errorResponse(res, {
      statusCode: error.statusCode,

      message: error.message,
    });
  }

  console.error(error);

  return errorResponse(res, {
    statusCode: 500,

    message: "Internal Server Error",
  });
}
