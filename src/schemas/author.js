import joi from "joi";
export const authorSchema = joi.object({
    id: joi.number().required().messages({
        "number.base": "ID phải là một số",
        "any.required": "ID là bắt buộc",
    }),
    name: joi.string().required().messages({
        "string.empty": "Tên không được để trống",
        "any.required": "Tên là bắt buộc",
    }),
});
