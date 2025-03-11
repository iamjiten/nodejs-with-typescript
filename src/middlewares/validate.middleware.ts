import { NextFunction, Request } from "express";
import { ZodSchema } from "zod";

// const formatMessage = (errors: any) => {
//   const formattedErrors = Object.fromEntries(
//     Object.entries(errors)
//       .map(([key, value]: any) => {
//         // Only include the field if there are actual errors
//         const errors = value._errors || [];
//         return errors.length > 0 ? [key, { errors }] : null;
//       })
//       .filter(Boolean) // Remove any null entries
//   );
//   return formattedErrors;
// };

export const validateBody =
  (schema: ZodSchema) => (req: Request, res: any, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(422).json({
        message: "Validation error",
        errors: result.error.format(),
      });
    }

    next();
  };

export const vlaidateQuery =
  (schema: ZodSchema) => (req: Request, res: any, next: NextFunction) => {
    const result = schema.safeParse(req.query);

    if (!result.success) {
      return res.status(422).json({
        message: "Validation error",
        errors: result.error.format(),
      });
    }

    next();
  };
