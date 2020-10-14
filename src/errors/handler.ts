import { ErrorRequestHandler } from "express";
import { ValidationError } from "yup";

interface IValidationErros {
  [key: string]: string[];
}

const erroHandler: ErrorRequestHandler = (error, _, response, __) => {
  if (error instanceof ValidationError) {
    let errors: IValidationErros = {};

    error.inner.forEach((err) => {
      errors[err.path] = err.errors;
    });

    return response.status(400).json({
      message: "Validation fails",
      errors,
    });
  }

  console.error(error);

  return response.status(500).json({
    message: "Internal server error",
  });
};

export default erroHandler;
