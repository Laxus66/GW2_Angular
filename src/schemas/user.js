import joi from "joi";

export const signupSchema = joi.object({
    name: joi.string().required().messages({
        "string.empty": "tên không được để trống",
        "any.required": "trường tên là bắt buộc",
    }),
    email: joi.string().email().required().messages({
        "string.empty": "email không được để trống",
        "string.email": "email không đúng định dạng",
        "any.required": "trường email là bắt buộc",
    }),
    password: joi.string().min(6).required().messages({
        "string.min": "password phải có it nhất{#limit} ký tự",
        "string.empty": "password không được để trống",
        "any.required": "trường email là bắt buộc",
    }),
    confirmPassword: joi.string().valid(joi.ref("password")).required().messages({
        "any.only": "confirmPassword không khớp",
        "any.required": "trường confirm là bắt buộc",
    }),

})

export const signinSchema = joi.object({
    email: joi.string().email().required().messages({
        "string.empty": "email không được để trống",
        "string.email": "email không đúng định dạng",
        "any.required": "trường email là bắt buộc",
    }),
    password: joi.string().min(6).required().messages({
        "string.min": "password phải có it nhất{#limit} ký tự",
        "string.empty": "password không được để trống",
        "any.required": "trường email là bắt buộc",
    }),
})