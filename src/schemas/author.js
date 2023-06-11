import joi from "joi";
export const authorSchema = joi.object({
    name: joi.string().required().messages({
        "string.empty": "Tên không được để trống",
        "any.required": "Tên là bắt buộc",
    }),
});
