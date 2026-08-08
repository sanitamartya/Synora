import UserRepository from "../database/repositories/UserRepository.js";
import { successResponse } from "../shared/apiResponse.js";

export async function getHealth(req, res) {
  const users = await UserRepository.findAll();

  return successResponse(res, {
    statusCode: 200,
    message: "Synora is healthy",
    data: {
      users,
    },
  });
}
