import UserRepository from "../database/repositories/UserRepository.js";
import { successResponse } from "../shared/apiResponse.js";

export async function createUser(req, res) {
  const user = await UserRepository.create(req.validated.body);

  return successResponse(res, {
    statusCode: 201,
    message: "User created successfully",
    data: user,
  });
}
